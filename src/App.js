import React from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './componentsWithHooks/header'
import Footer from './componentsWithHooks/footer';
import Registration from './componentsWithHooks/registration';
import Welcome from './componentsWithHooks/welcome';
import Login from './componentsWithHooks/login';
import Timeline from './componentsWithHooks/timeline';


const App = () => {
  return (
    <div>
      <Header />
      <div className="container content">
      <Switch>
        <Route exact path = '/' component={Registration} />

        <Route exact path = '/login' component={Login} />
        {localStorage.getItem('email') ? 
        <Route path = "/timeline" component={Timeline} /> :
        <Redirect to = '/login' /> }
       
      </Switch>
     
      
      </div>
      <Footer />
    </div>
  )
}







export default App;
