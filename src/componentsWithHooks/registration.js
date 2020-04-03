import React, {useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Welcome from './welcome';

// installed react-route-dom and axios !!! 

const Registration = (props) => {
  const [inputStyle, setInputStyle] = useState({});
  const [Email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);

  const hide = () => {
    setPopup(false);
  }

  const handleSubmit = e =>{
    e.preventDefault();
    const formData = new FormData(document.getElementById("form123"));

    axios.post('http://localhost:3002/user/registration', formData).then((res) => {
      console.log("Server Response : ", res);
      console.log("props : ",props);
      if(res.data){
        console.log("User is Present !!");
        setInputStyle({border:'3px solid red'});
        setEmail("Email already exists..");
      }
      else{
        console.log("user is created !! ");
        setInputStyle({});
        setEmail("");
        setPopup(true);
       // props.history.push('/login');
      }
    })
  };

    return (
      <div>
         {popup ? (
              <div className="popup_sec" id="pop_forgt" >
                <div className="clos_btn" onClick={hide}><img src="images/clos.png"  alt="" id="clos_pop"/></div>
                <div className="pop_hdr">A link has been send to your e-mail Id for verifying your email address </div>
                <div className="man_contnt">
                <span>Please Check Your Mail Box!</span>
                <input type="submit" value="Ok" onClick={hide} />
                </div>
                </div>) : <div /> }
        <div className="content_rgt">
          <div className="register_sec">
            <h1>Create An Account</h1>
            <form onSubmit = {handleSubmit} id="form123">
            <ul>
              <li><span>Username</span><input type="text" placeholder="Enter your username" name='username' required /></li>
              <li><span>Password</span><input type="password" placeholder="Enter your password" name='password' required /></li>
              <li><span>Email</span><input type="text" placeholder="Enter your email" name='email' required style={inputStyle} /></li>
    <span style = {{color:'red'}}><b>{Email}</b></span>
              <li><span>First Name</span><input type="text" placeholder="Enter your first name" name='firstname' required /></li>
              <li><span>Last Name</span><input type="text" placeholder="Enter your last name" name='lastname' required /></li>
              <li><input type="checkbox" required />I agree to Term &amp; Conditions</li>
              <li><input type="submit" defaultValue="Register" /></li>
            </ul>
            </form>
            <div className="addtnal_acnt">I already have an account.<Link to = '/login'>Login My Account !</Link></div>
          </div>
        </div>
        <Welcome />
        </div>
    )
  };


export default Registration;


