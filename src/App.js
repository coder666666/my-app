import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Menu from './components/Menu'
import Login from './pages/login'
import Home from './pages/home'
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
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
