import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import axios from 'axios';
import {userAction} from './redux/actions';

import Header from './componentsWithHooks/header'
import Footer from './componentsWithHooks/footer';
import Registration from './componentsWithHooks/registration';
import Welcome from './componentsWithHooks/welcome';
import Login from './componentsWithHooks/login';
import Timeline from './componentsWithHooks/timeline';
import SinglePost from './componentsWithClasses/singlePost';
import ForgetPassword from './componentsWithHooks/forgotPassword';
import ResetPassword from './componentsWithHooks/resetPassword';
import PageNotFound from './componentsWithHooks/pageNotFound';
import verifyUser from './componentsWithHooks/verifyUser';
import VerifyUser from './componentsWithHooks/verifyUser';


const App = (props) => {
  const {userData} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  
  // const userData = useSelector(state => {
  //   console.log("userData", state);
  //   return state
  //    });
  // console.log("useSelector", props, userData);

  useEffect(() => {
    if(localStorage.getItem('token')){
    axios.post('http://localhost:3002/user/jwtverify', {token:localStorage.getItem('token')}).then(res => {
      console.log("jwtVerified kya", res);
      if(res.data.payload){
          //setIsLoggedIn(true);
          dispatch(userAction(res.data.payload));
      } 
    });}

  }, []);



  return (
    <div>
      <Header />
      <div className="container content">
      {userData ? 
      (<Switch>
        <Route exact path = "/timeline" component={Timeline} />
        <Route exact path="/timeline/singlepost/:_id" render={(props) => ( <SinglePost {...props} />)}/>
         <Route exact path = '/' component={Registration} />
        <Route exact path = '/login' component={Login} />
        <Redirect from = '(/|/login)' to ='/timeline' />
        <Route exact path = "*" component={PageNotFound} />      
      </Switch>) :
      (<Switch>
        <Route exact path = '/' component={Registration} />
        <Route path = '/verifyuser/:_id' component = {VerifyUser} />
        <Route exact path = '/login' component={Login} />
        <Route path ='/forgetpassword' component={ForgetPassword} />
        <Route exact path = '/resetpassword/:_id' component={ResetPassword} />
        <Route exact path = "*" component={PageNotFound} />       
      </Switch>)}   
      
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => {
  return {userData:state.userData} ;
}




export default connect(mapStateToProps)(App);
