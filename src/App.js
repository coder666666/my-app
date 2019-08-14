import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout'
import Login from './pages/login'
import { getMenuList } from './server'

import './App.css';

const menuList = () => {
  console.log(getMenuList)
  return getMenuList()
}

function App() {

  const [menuData, setMenuData] = useState([]);

  // useEffect(() => {
  //   setMenuData(menuList())
  // }, []);
  // const renderRouter = router.map(item => (
  //   <Route path={item.path} components={item.components} />
  // ));

  return (
    <div className="App">
      <Router>
        <Route path="/" component={Layout}></Route>
        {/* <Route path="/home" component={Home}></Route> */}
        <Route path="/login" component={Login}></Route>
        <Redirect to="/" />
      </Router>
    </div>
  );
}

export default App;
