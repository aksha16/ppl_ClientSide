import React, { useState, useEffect } from 'react';
import Welcome from './welcome';
import axios from 'axios';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e) => {
        setNewPassword(e.target.value);
        console.log("passwprddsss", newPassword);
    }
    
    const handleSubmit = () => {
        console.log("this worked or not!!!");
        if(newPassword != confirmPassword){
            alert("password doesn't match");
        }
    }
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Reset Password</title>
         
         
          <div className="container">
            <div className="content">
              <div className="content_rgt">
                <div className="register_sec">
                  <h1>Reset Password</h1>
                  <ul>
                    <li><span>Enter New Password</span><input type="password" placeholder="Enter your new password" name="newPassword" onChange={handleChange} required /></li>
                    <li><span>Confirm Password</span><input type="password" placeholder="Enter your password again" name="confirmPassword" onChange={handleChange} required /></li>
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