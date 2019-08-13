import React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumb } from 'antd';
import './css/headerDesc.scss'

const Index = props => {
  return (
    <div className="workplace-header">
      <Breadcrumb>
        <Breadcrumb.Item key="/home">
          <Link to="/home">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item key="/list">
          <Link to="/list">详情</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="workplace-header-title">工作台</div>
      <div className="workplace-header-content">
        <div className="header-content-mainLeft">
          <div className="avatar">
            <img src={require('./css/img/aa.jpg')} alt=""/>
          </div>
          <div className="user-info">
            <div className="user-info-title">
              早安，<span className="username">{111}</span>，祝你开心每一天！
            </div>
            <div className="user-info-role">前端开发工程师 | 技术部 - 前端</div>
          </div>
        </div>
        <div className="header-content-mainRight">
          <div className="mainRight-content">
            <div className="mainRight-content-title">项目数</div>
            <div className="mainRight-content-num">66</div>
          </div>
          <div className="mainRight-line"></div>
          <div className="mainRight-content">
            <div className="mainRight-content-title">团队内排名</div>
            <div className="mainRight-content-num">3 / 33</div>
          </div>
          <div className="mainRight-line"></div>
          <div className="mainRight-content">
            <div className="mainRight-content-title">项目访问</div>
            <div className="mainRight-content-num">8888</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
