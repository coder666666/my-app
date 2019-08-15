import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './css/doingProject.scss'

const Index = props => {

  const formatTime = time => {
    const currentTime = new Date().getTime();
    const dateTime = new Date(time).getTime();
    const resTime = currentTime - dateTime;

    const year = resTime / (365 * 24 * 60 * 60 * 1000);
    const month = resTime / (30 * 24 * 60 * 60 * 1000);
    const day = resTime / (24 * 60 * 60 * 1000);
    const hour = resTime / (3600 * 1000);
    const min = resTime / 60000;

    if (year >= 1) {
      return `${Math.floor(year)}年前`
    } else  if (month >= 1) {
      return `${Math.floor(month)}月前`
    } else  if (day >= 1) {
      return `${Math.floor(day)}天前`
    } else  if (hour >= 1) {
      return `${Math.floor(hour)}小时前`
    } else  if (min >= 0) {
      return `${Math.ceil(min || 1)}分钟前`
    }

  }

  const data = [{
    name: '今日份牢骚',
    iconUrl: './css/img/aa.jpg',
    desc: '不知道未来会是什么样子的，不管怎样，生活依然要继续',
    group: '牢骚小分队',
    updateTime: '2019-08-08 10:10:10',
    path: '/list',
    state: {}
  }, {
    name: '今日份牢骚',
    iconUrl: './css/img/aa.jpg',
    desc: '不知道未来会是什么样子的，不管怎样，生活依然要继续',
    group: '牢骚小分队',
    path: '/list',
    updateTime: '2019-08-08 10:10:10',
    state: {}
  }, {
    name: '今日份牢骚',
    iconUrl: './css/img/aa.jpg',
    desc: '不知道未来会是什么样子的，不管怎样，生活依然要继续',
    group: '牢骚小分队',
    updateTime: '2019-08-08 10:10:10',
    path: '/list',
    state: {}
  }, {
    name: '今日份牢骚',
    iconUrl: './css/img/aa.jpg',
    desc: '不知道未来会是什么样子的，不管怎样，生活依然要继续',
    group: '牢骚小分队',
    path: '/list',
    updateTime: '2019-08-08 10:10:10',
    state: {}
  }, {
    name: '今日份牢骚',
    iconUrl: './css/img/aa.jpg',
    desc: '不知道未来会是什么样子的，不管怎样，生活依然要继续',
    group: '牢骚小分队',
    path: '/list',
    updateTime: '2019-08-08 10:10:10',
    state: {}
  }, {
    name: '今日份牢骚',
    iconUrl: './css/img/aa.jpg',
    desc: '不知道未来会是什么样子的，不管怎样，生活依然要继续',
    group: '牢骚小分队',
    path: '/list',
    updateTime: '2019-08-08 10:10:10',
    state: {}
  }]

  const projectList = data.map((item, i) => (
    <NavLink key={item.path + i} to={{ path: item.path, state: item.state }} className="doingPro-content-pro">
      <div className="doingPro-content-title">
        <img src={require('./css/img/aa.jpg')} />
        <span>{item.name}</span>
      </div>
      <div className="doingPro-content-desc">{item.desc}</div>
      <div className="doingPro-content-group">
        <span>{item.group}</span>
        <span className="time">{formatTime(item.updateTime)}</span>
      </div>
    </NavLink>
  ))

  return (
    <section className="doingProject">
      <div className="doingPro-header">
        <div className="doingPro-header-title">进行中的项目</div>
        <Link to="/allProject">全部项目</Link>
      </div>
      <div className="doingPro-content">
        {projectList}
      </div>
    </section>
  )
}

export default Index
