import React from 'react';
import { NavLink } from 'react-router-dom';

const Index = props => {
  const data = [{
    text: '表单新增',
    path: '/form',
    state: { status: 'add' } // 路由参数
  }, {
    text: '列表页',
    path: '/list',
    // state: { status: 'add' } // 路由参数
  }, {
    text: '分析统计',
    path: '/anylizesi',
    // state: { status: 'add' } // 路由参数
  }, {
    text: '个人信息',
    path: '/user',
    // state: { status: 'add' } // 路由参数
  }];

  const navMenuBtn = data.map(item => (
    <NavLink key={item.path} className="navBtn" to={{ path: item.path, state: item.state }}></NavLink>
  ))
  return (
    <section className="firstStart">
      <div className="firstStart-header">快速开始 / 便捷导航</div>
      <div className="firstStart-content">
        {navMenuBtn}
        <div className="addNav">
          <span className="addIcon">+</span>
          <span>添加</span>
        </div>
      </div>
    </section>
  )
}

export default Index
