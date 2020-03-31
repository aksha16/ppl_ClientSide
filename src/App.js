import React from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './componentsWithHooks/header'
import Footer from './componentsWithHooks/footer';
import Registration from './componentsWithHooks/registration';
import Welcome from './componentsWithHooks/welcome';
import Login from './componentsWithHooks/login';
import Timeline from './componentsWithHooks/timeline';
import SinglePost from './componentsWithClasses/singlePost';
import ForgetPassword from './componentsWithHooks/forgotPassword';
import ResetPassword from './componentsWithHooks/resetPassword';


const App = () => {
  return (
    <div>
      <Header />
      {/* {localStorage.clear()} */}
      <div className="container content">
      {localStorage.getItem('email') ? 
      (<Switch>
        <Route exact path = "/timeline" component={Timeline} />
        <Route exact path="/timeline/singlepost/:_id" render={(props) => ( <SinglePost {...props} />)}/>
         <Route exact path = '/' component={Registration} />
        <Route exact path = '/login' component={Login} />
        
        

      </Switch>) :

      (<Switch>

        <Route exact path = '/' component={Registration} />
        <Route exact path = '/login' component={Login} />
        <Route path ='/forgetpassword' component={ForgetPassword} />
        <Route path = '/resetpassword' component={ResetPassword} />

       
      </Switch>)}
     
      
      </div>
      <Footer />
    </div>
  )
}






export default App;
