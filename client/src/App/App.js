import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Failure from './pages/Failure';
import Home from './pages/Home';
import List from "./pages/List";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Success from './pages/Success';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/success' component={Success}/>
        <Route path='/failure' component={Failure}/>
        <Route path='/home' component={Home}/>
        <Route path='/list' component={List}/>
      </Switch>
    </div> 
  )
}

export default App;
