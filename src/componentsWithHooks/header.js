import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const localEmail = localStorage.getItem("email");

  const handleLogOut = e => {
    //e.preventDefault();
    localStorage.clear();
    //props.history.push('/login');
   // console.log("props history", this.props.history);
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Create An Account</title>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <button
              type="button"
              className="btn btn-navbar"
              data-toggle="collapse"
              data-target=".nav-collapse"
            >
              {" "}
              <span className="icon-bar" /> <span className="icon-bar" />{" "}
              <span className="icon-bar" />{" "}
            </button>
            <a className="brand" href>
              PPL
            </a>
            <div className="pro_info pull-right">
              <div className="pro_icn">
                <img src="/images/pic_small.png" />
              </div>
              <div className="pro_txt">
                Me
                <b className="caret" />
              </div>
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="dLabel"
              >
                <li>
                  <a tabIndex={-1} href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href="#">
                    Message Box
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href="#">
                    Change Language
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a tabIndex={-1} href="#">
                    <input type="text" placeholder="search" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-collapse collapse">
              <ul className="nav">
                <li className="active">
                  {" "}
                  <a href>Home</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>Profile</a>{" "}
                </li>
                <li className>
                  {" "}
                  <a href>Log-out</a>{" "}
                </li>
                {/* <li className> <a href>Resuse Market</a> </li>
                    <li className> <a href>Lost and Found</a> </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header_lft">
          <div className="logo">
            <a href="#">
              <img src="/images/logo.png" />
            </a>
          </div>
          {localStorage.getItem("email") ? (
            <div className="navigatn">
              <ul>
                {/* <li>
                  <Link to="/timeline" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/timeline/profile"> Profile </Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleLogOut}>
                    log-out{" "}
                  </Link>
                </li> */}
                {/* <li><a href="#"> Resuse Market </a></li>
                  <li><a href="#"> Lost and Found</a></li> */}
                  
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#"> E-Coupons </a></li>
        <li><a href="#">E-Brands </a></li>
        <li><a href="#"> Resuse Market </a></li>
        <li><a href="#"> Lost and Found</a></li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="header_rgt">
          <div className="flag_div">
            <img src="/images/flag.png" />
          </div>
          <input type="text" placeholder="Search" className="txt_box" />
          <div className="msg_box">
            <a href="#">
              <span className="msg_count">0</span>
            </a>
          </div>
          <div className="info_div">
            <div className="image_div">
              {" "}
              <img src="/images/pic.png" />{" "}
            </div>
            <Link to='/login'>
            <div className="info_div1" onClick={handleLogOut} >
              Log-out
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
