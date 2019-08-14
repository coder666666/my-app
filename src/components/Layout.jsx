import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header'
import Menu from './Menu'
import Home from '../pages/home'

import './css/layout.scss'

const Index = () => {
  return (
    <main>
      <aside>
        <Menu></Menu>
      </aside>
      <section>
        <Header></Header>
        <Route path="/home" component={Home}></Route>
      </section>
    </main>
  )
}

export default Index
