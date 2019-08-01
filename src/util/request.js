import axios from 'axios';
import { Spin, Message } from 'antd';

// 设置超时时间
axios.defaults.timeout = 1000 * 40;
// 请求拦截器，加上Authorization（token）
axios.interceptors.request.use(res => {

  if (res.method === 'get' || res.method === 'GET') { // get请求，对参数进行去空格、编码处理

    if (res.param) { // get请求也以参数形式传递，不拼接在url后面

      const obj = {};

      for (const i in res.param) {

        if (res.param[i]) {

          if (typeof res.param[i] === 'string' && res.param[i].trim() !== '') {

            obj[i] = encodeURIComponent(res.param)
          } else {

            obj[i] = res.param
          }
        }
        res.param = obj
      }
    } else if (res.url.split('?')[1]) { // 拼接在url后面

      const urlQuery = res.url.split('?')[1];
      const urlQueryParam = urlQuery.split('&');

      const resUrl = urlQueryParam.map(item => {

        if (typeof item.split('=')[1] === 'string') {

          return item.split('=')[0] + '=' + encodeURIComponent(item.split('=')[1].trim())
        }
        return item
      });
      res.url = res.url.split('?')[0] + '?' + resUrl.join('&');
    }
  }
  if (res.url !== '/login') {

    const token = localStorage.getItem('token');
    res.headers.Authorization = token
  }
  return res
})

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {

  const responseUrl = response.config.url.replace(window.location.protocol + '//' + window.location.host, '');
  // const resLoadingUrl = loadingUrl ? loadingUrl.split('?')[0] : null;
  const data = response.data.data || response.data || response;

  // responseUrl.split('?')[0] === resLoadingUrl && loadingInstance && loadingInstance.close() // 隐藏loading

  if (data.code === '100001' || data.code === '100003') { // 登录过期判断

    // 跳往登录页
    let fromTo = window.location.href.split('from=')[1] || window.location.href.split('redict')[1] || '/home';
    window.location.href = decodeURIComponent(fromTo);

    return
  }

  return data
}, err => {

  // loadingInstance && loadingInstance.close() // 隐藏loading
  Message.error('网络繁忙，请稍后再试')
  return err
})

/**
 * @param {String url} 请求url
 * @param {String method} 请求方式，默认get
 * @param {Object data} 请求参数
 * @param {Boolean isShowLoading} 是否显示loading，默认为true
 * @param {Boolean isShowErrorMsg} 是否显示错误信息，默认为true
 */

export default (reqObj = {}) => {
  const { url, method, data, param, isShowLoading = true, isShowErrorMsg = true } = reqObj;

  return new Promise((resolve, reject) => {
    const reqParam = {
      url, method: method || 'get', data
    };

    // get请求时支持参数不拼接在url后面
    if (reqParam.method === 'get' || reqParam.method === 'GET') {

      reqParam.param = param
    }

    try {
      // Spin.setDefaultIndicator({ tip: '加载中，请稍候...' });
      axios(reqParam).then(res => {

        if (res && res.code === '000000') {

          resolve(res);
        } else {

          // 显示错误信息，reject
          if (isShowErrorMsg) {

            throw new Error(res.msg || '网络繁忙，请稍后再试');
            reject();
          } else {

            // 不显示错误信息，resolve
            resolve(res)
          }
        }
      }).catch(() => {

        throw new Error('网络繁忙，请稍后再试')
      })
    }
    catch (err) {

      Message.error(err.message)
    }
  })
}
