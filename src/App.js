import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Menu from './components/Menu'
import Login from './login'
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
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
