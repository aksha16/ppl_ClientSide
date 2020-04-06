import React, { useEffect } from 'react';
import axios from 'axios';

const VerifyUser = (props) => {
    useEffect(() => {
        axios.post('http://localhost:3002/sign/verifyuser', {_id:props.match.params._id}).then(res => {
            console.log("user has been verified!!");
        })

    });

    return(
    <div>
    <meta charSet="utf-8" />
    <title>Verify User</title>
   <div className="container">
      <div className="content">
        <div className="content_lft">
            <h1>User has been verified, now you can log-in.</h1>
        </div>
        <div className="content_lft">
            <img src="/images/userVerified.png" alt="" style={{height:'350px'}} /> 
        </div>
      </div>
    </div>
    <div className="clear" />
  </div>
    )
};

export default VerifyUser;