import React, { useEffect, useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
// import Menu from './components/Menu'
import { getMenuList } from './server'

import './App.css';

const menuList = () => {
  console.log(getMenuList)
  return getMenuList()
}

function App() {

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(menuList())
  }, []);
  console.log(menuData)
  // const renderRouter = router.map(item => (
  //   <Route path={item.path} components={item.components} />
  // ))

  return (
    <div className="App">
      {/* <Menu />
      <Router>
        <Switch>
          { renderRouter }
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
