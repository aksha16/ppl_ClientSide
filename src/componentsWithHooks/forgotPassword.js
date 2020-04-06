import React, { useState } from 'react';
import axios from 'axios';
import Welcome from './welcome';

const ForgetPassword = (props) => {
    const [popup, setPopup] = useState(false);

    const handleForget = (e) => {
        e.preventDefault();
        console.log("is this been callled ddddddd");
        setPopup(true);
        const formData = new FormData(document.getElementById("form12"));
        axios.post("http://localhost:3002/sign/forgetpassword", formData).then(res => {
            console.log("hohoho");
            if(res.data.status) {
                console.log("hahahahahahahhahahah", res.data);
            localStorage.setItem("_id", res.data._id);
            }
            else {
            alert("Email is not registered!");
            props.history.push('/');
            }
            })

        }
    const hide =() => {
        setPopup(false);
    }
    return (
        <div> 
            {popup ? (
              <div className="popup_sec" id="pop_forgt" >
                <div className="clos_btn" onClick={hide}><img src="images/clos.png"  alt="" id="clos_pop"/></div>
                <div className="pop_hdr">A mail has been send to your e-mail Id for Reset Password Link</div>
                <div className="man_contnt">
                <span>Please Check Your Mail Box!</span>
                <input type="submit" value="Ok" onClick={hide} />
                </div>
                </div>) : <div /> }
          <meta charSet="utf-8" />
          <title>Forgot Password</title>      
          <div className="container">
            <div className="content">
              <div className="content_rgt">
                <div className="register_sec">
                  <h1>Forgot Password</h1>
                  <ul>
                      <form onSubmit={handleForget} id="form12">
                    <li><span>Enter E-mail ID</span><input type="text" placeholder="write your email addres" name="email" required /></li>
                    <li><input type="submit" defaultValue="Submit" /></li>
                    </form>
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

export default ForgetPassword;
    