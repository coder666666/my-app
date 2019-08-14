import React, { useState } from 'react'

import { Input, Tooltip, Icon, Menu, Dropdown, Badge } from 'antd'

import './css/header.scss'

const Home = props => {
  let inputSearchRef = React.createRef();
  const [isShowSearch, setShowSearch] = useState(false);

  const handleSearchIcon = async () => {
    await setShowSearch(true);
    console.log(inputSearchRef)
    inputSearchRef.current.focus();
  }
console.log(inputSearchRef)
  const dropdownMenu_user = (
    <Menu>
      <Menu.Item key="0">
        <span><Icon type="user" />个人信息</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span><Icon type="setting" />个人设置</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <span><Icon type="logout" />退出登录</span>
      </Menu.Item>
    </Menu>
  )

  const dropdownMenu_lang = (
    <Menu>
      <Menu.Item>
        <span>简体中文</span>
      </Menu.Item>
      <Menu.Item>
        <span>English</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <header className="header-content">
      <div className="header-left">
        <Icon type="menu-fold" />
      </div>
      <ul className="header-right">
        <li className="search">
          <Icon type="search" onClick={handleSearchIcon} />
          <Input
            ref={inputSearchRef}
            className={isShowSearch ? 'search-input showTransform' : 'search-input'}
          />
        </li>
        <li>
          <Tooltip placement="bottom" title="帮助文档" arrowPointAtCenter>
            <Icon type="question-circle" />
          </Tooltip>
        </li>
        <li>
          <Badge count={11}>
            <Icon type="bell" />
          </Badge>
        </li>
        <li>
          <Dropdown overlay={dropdownMenu_user}>
            <span>
              <Icon type="github" />
              <span className="username">Hello world</span>
            </span>
          </Dropdown>
        </li>
        <li>
          <Dropdown overlay={dropdownMenu_lang}>
            <Icon type="dribbble" />
          </Dropdown>
        </li>
      </ul>
    </header>
  )
}

export default Home
