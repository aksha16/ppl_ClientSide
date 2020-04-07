import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Welcome from './welcome';

const Login = (props) => {
   // localStorage.clear();
  const [checkLogin, setCheckLogin] = useState(0);
  const [inputStyle, setInputStyle] = useState({})
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("form123"));
    console.log("working !!");
    Axios.post('http://localhost:3002/sign/jwt', formData).then(res => {
      console.log("letss", res);
      formData.append('token', res.data.token);

      Axios.post('http://localhost:3002/sign/login', formData).then((res) => {
        console.log("res:", res);
        if(res.data.status){
          console.log("user can log-in!!", res.data);
          setCheckLogin(0);
          setInputStyle({});
          
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('token', res.data.token);
          //console.log("jah", props.history);
          props.history.push('/timeline');
        }
        else {
          setCheckLogin(1);
          setInputStyle({border:'3px solid red'});
        }
      })
    });

   
    
  }

    return (
      <div>
        <meta charSet="utf-8" />
        <title>Login Account</title>
        {/* <div className="container">
          <div className="content"> */}
            <div className="content_rgt">
              <div className="login_sec">
                <h1>Log In</h1>
                <ul>
                  <form onSubmit={handleSubmit} id="form123">
                {checkLogin?<span style = {{color:'red'}}><b>Wrong Email or Password</b></span>:''}
                  <li><span>Email-ID</span><input type="text" name='email' placeholder="Enter your email" required style ={inputStyle} /></li>
                  <li><span>Password</span><input type="password" name='password' placeholder="Enter your password" required style ={inputStyle} /></li>
                  <li><input type="checkbox" name='rememberMe' />Remember Me</li>
                  <li><input type="submit" defaultValue="Log In" /><Link to="/forgetpassword">Forgot Password</Link></li>
                  </form>
                </ul>
                <div className="addtnal_acnt">I do not have any account yet.<Link to = '/'>Create My Account Now !</Link></div>
              </div>
            </div>
            <Welcome />
          </div>
      //   </div>
        
      // </div>
      );
  };

  export default Login;