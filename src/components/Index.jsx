import React from 'react';
import {  BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout'

const Index = () => {
  return (
    <Route path="/app" component={Layout}></Route>
  )
}

export default Index
