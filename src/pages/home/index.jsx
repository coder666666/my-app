import React, { useState } from 'react'

import { Input, Tooltip, Icon, Menu, Dropdown, Badge } from 'antd'
import HeaderDesc from './HeaderDesc'
import FastStart from './FastStart'
import DoingProject from './DoingProject'

import './css/index.scss'

const Home = props => {

  return (
    <div className="home-page-contaniner">
      <HeaderDesc />
      <main className="home-page-content">
        <aside>
          <DoingProject />
        </aside>
        <section>
          <FastStart />
        </section>
      </main>
    </div>
  )
}

export default Home
