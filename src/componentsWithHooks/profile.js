import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {

  const [profile, setProfile] = useState([]);

    useEffect(async ()=> {
        await axios.post('http://localhost:3002/user/login/profile', {email:localStorage.getItem('email')}).then(res => {
            console.log("resProfile", res.data);
            setProfile(res.data[0]);
            console.log("profile has came", profile);
          })

    }, []);

        return (
          <div className="content_lft">
<div className="timeline_div">
              <div className="timeline_div1">
                <div className="profile_pic">
                  <img src="/images/timeline_img1.png" />
                  <div className="profile_text">
                    <a href="#">Change Profile Pic</a>
                  </div>
                </div>
                <div className="profile_info">
                  <div className="edit_div">
                    <a href="#">
                      Edit <img src="/images/timeline_img.png" />
                    </a>
                  </div>
                  <div className="profile_form">
                    <ul>
                      <li>
                        <div className="div_name1">Name :</div>
        <div className="div_name2">{profile.firstname} {profile.lastname}</div>
                      </li>
                      <li>
                        <div className="div_name1">Sex :</div>
                        <div className="div_name2">Female</div>
                      </li>
                      <li>
                        <div className="div_name1">Description :</div>
                        <div className="div_name3">
                          This is an example of a comment. You can create as
                          many comments like this one or sub comments as you
                          like and manage all of your content inside Account.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline_div2">
                <ul>
                  <li>
                    <a href="#" className="active">
                      Timeline{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">About </a>
                  </li>
                  <li>
                    <a href="#">Album</a>
                  </li>
                  <li>
                    <a href="#"> Pets</a>
                  </li>
                  <li>
                    <a href="#">My Uploads </a>
                  </li>
                </ul>
              </div>
            </div>
            </div>
)};

export default Profile;