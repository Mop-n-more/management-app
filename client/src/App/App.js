import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import List from "./pages/List";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/home' component={Home}/>
        <Route path='/list' component={List}/>
      </Switch>
    </div> 
  )
}

export default App;
