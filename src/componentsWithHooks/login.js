import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Welcome from "./welcome";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../redux/actions";

const Login = props => {
  const [checkLogin, setCheckLogin] = useState(0);
  const [inputStyle, setInputStyle] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("form123"));
    console.log("working !!");

    Axios.post("http://localhost:3002/user/login", formData).then(res => {
      console.log("res:", res);
      if (res.data.token) {
        console.log("user can log-in!!", res.data);
        setCheckLogin(0);
        setInputStyle({});

        localStorage.setItem("token", res.data.token);
        const token = localStorage.getItem("token");
        Axios.post("http://localhost:3002/user/jwtverify", {
          token: token
        }).then(res => {
          console.log("jwtVerified kya", res);
          if (res.data) {
            console.log("jwtverify", res.data);
            dispatch(userAction(res.data.payload));
          }
        });
        props.history.push("/timeline");
      } else {
        setCheckLogin(1);
        setInputStyle({ border: "3px solid red" });
      }
    });
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Login Account</title>
      <div className="content_rgt">
        <div className="login_sec">
          <h1>Log In</h1>
          <ul>
            <form onSubmit={handleSubmit} id="form123">
              {checkLogin ? (
                <span style={{ color: "red" }}>
                  <b>Wrong Email or Password</b>
                </span>
              ) : (
                ""
              )}
              <li>
                <span>Email-ID</span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  required
                  style={inputStyle}
                />
              </li>
              <li>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  style={inputStyle}
                />
              </li>
              <li>
                <input type="checkbox" name="rememberMe" />
                Remember Me
              </li>
              <li>
                <input type="submit" defaultValue="Log In" />
                <Link to="/forgetpassword">Forgot Password</Link>
              </li>
            </form>
          </ul>
          <div className="addtnal_acnt">
            I do not have any account yet.
            <Link to="/">Create My Account Now !</Link>
          </div>
        </div>
      </div>
      <Welcome />
    </div>
  );
};

export default Login;
