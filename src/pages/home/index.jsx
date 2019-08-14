import React, { useState } from 'react'

import { Input, Tooltip, Icon, Menu, Dropdown, Badge } from 'antd'
import HeaderDesc from './HeaderDesc'
import FirstStart from './FirstStart'

const Home = props => {

  return (
    <div className="home-page-contaniner">
      <HeaderDesc />
      <FirstStart />
    </div>
  )
}

export default Home
