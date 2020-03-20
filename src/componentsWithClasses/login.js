import React from 'react';
import Axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Welcome from './welcome';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {msg:"", inputStyle:{}};

  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value, msg:"", inputStyle:{}});
    console.log("login is data : ",event.target.value);
  };
  
  handleSubmit = e => {
    e.preventDefault();
    console.log("working !!");
    Axios.post('http://localhost:3002/user/login', this.state).then((res) => {
      console.log("res:", res);
      if(res.data){
        console.log("user can log-in!!");
        this.props.history.push('/login/timeline');
      }
      else {
        this.setState({msg:"Wrong email or password", inputStyle:{border:'3px solid red'}});
        console.log("user can't log-in..", this.state.msg);
      }
    })
    const { email, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('email', email);
  }

  
  render() {
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
                  <form onSubmit={this.handleSubmit}>
                <span style = {{color:'red'}}><b>{this.state.msg}</b></span>
                  <li><span>Email-ID</span><input type="text" name='email' placeholder="Enter your email" required onChange={this.handleChange} style ={this.state.inputStyle} /></li>
                  <li><span>Password</span><input type="password" name='password' placeholder="Enter your password" required onChange={this.handleChange} style ={this.state.inputStyle} /></li>
                  <li><input type="checkbox" onChange={this.handleChange} name='rememberMe' />Remember Me</li>
                  <li><input type="submit" defaultValue="Log In" /><a href>Forgot Password</a></li>
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
    }
  };

  export default Login;