import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Welcome from './welcome';

// installed react-route-dom and axios !!! 

class Registration extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        inputStyle:{},
        Email:""
      };
  }

  handleSubmit = e =>{
    e.preventDefault();
    axios.post('http://localhost:3002/user/registration', this.state).then((res) => {
      console.log("Server Response : ", res);
      console.log("props : ",this.props);
      if(res.data){
        console.log("User is Present !!");
        this.setState({inputStyle:{border:'3px solid red'}});
        this.setState({Email:"Email already exists.."});
        // this.props.history.push('/login');
      }
      else{
        console.log("user is created !! ");
        this.setState({inputStyle:{}});
        this.setState({Email:""});
        this.props.history.push('/login');
        //this.props.history.push('/login', Login);
      }
    })
  };

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value, Email:"", inputStyle:{}});
  };


  render(){
    return (
      <div>
        <div className="content_rgt">
          <div className="register_sec">
            <h1>Create An Account</h1>
            <form onSubmit = {this.handleSubmit}>
            <ul>
              <li><span>Username</span><input type="text" placeholder="Enter your username" name='username' required onChange={this.handleChange} /></li>
              <li><span>Password</span><input type="password" placeholder="Enter your password" name='password' required onChange={this.handleChange} /></li>
              <li><span>Email</span><input type="text" placeholder="Enter your email" name='email' required onChange={this.handleChange} style={this.state.inputStyle} /></li>
    <span style = {{color:'red'}}><b>{this.state.Email}</b></span>
              <li><span>First Name</span><input type="text" placeholder="Enter your first name" name='firstname' required onChange={this.handleChange} /></li>
              <li><span>Last Name</span><input type="text" placeholder="Enter your last name" name='lastname' required onChange={this.handleChange} /></li>
              <li><input type="checkbox" required />I agree to Term &amp; Conditions</li>
              <li><input type="submit" defaultValue="Register" /></li>
            </ul>
            </form>
            <div className="addtnal_acnt">I already have an account.<Link to = '/login'>Login My Account !</Link></div>
          </div>
        </div>
        <Welcome />
        </div>
    )}
  };


export default Registration;