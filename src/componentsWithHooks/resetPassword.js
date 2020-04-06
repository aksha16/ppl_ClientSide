import React, { useState, useEffect } from 'react';
import Welcome from './welcome';
import axios from 'axios';

const ResetPassword = (props) => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inputStyle, setInputStyle] = useState({});
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [popUp, setPopUp] = useState(false);

    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        console.log("passwprddsss", newPassword);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        console.log("passsword confirm", confirmPassword);
    }
    
    const handleSubmit = () => {
        console.log("this worked or not!!!", newPassword,confirmPassword);
        if(newPassword === confirmPassword){
            setInputStyle({});
            setPasswordCheck(false);
            const userData = {_id:props.match.params._id, password:newPassword};
            axios.post('http://localhost:3002/sign/resetpassword', userData ).then(res => {
                console.log("backend has been called.", res.data);
                setPopUp(true);
            })
        }
        else{
            console.log("password doesn't match");
            setInputStyle({border:'3px solid red'});
            setPasswordCheck(true);
            setPopUp(false);
        }
    }

    const goToLogin = () =>{
        props.history.push('/login');
    }

      return (
        <div>
            {popUp ? (
              <div className="popup_sec" id="pop_forgt" >
                <div className="pop_hdr">Password has been reset</div>
                <div className="man_contnt">
                <span>Press OK, to login!</span>
                <input type="submit" value="OK" onClick={goToLogin} />
                </div>
                </div>) : <div /> }
          <meta charSet="utf-8" />
          <title>Reset Password</title>         
          <div className="container">
            <div className="content">
              <div className="content_rgt">
                <div className="register_sec">
                  <h1>Reset Password</h1>
                  <ul>
                     {passwordCheck?<span style = {{color:'red'}}><b>Passwords doesn't match</b></span>:''}
                    <li><span>Enter New Password</span><input type="password" placeholder="Enter your new password" name="newPassword" onChange={handleNewPassword} required style={inputStyle} /></li>
                    <li><span>Confirm Password</span><input type="password" placeholder="Enter your password again" name="confirmPassword" onChange={handleConfirmPassword} required style={inputStyle} /></li>
                    <li><input type="submit" defaultValue="Submit" onClick={handleSubmit} /></li> 
                  </ul>
                </div>
              </div>
            <Welcome />
            </div>
          </div>
          <div className="clear" />
        </div>
      );
  };

export default ResetPassword;