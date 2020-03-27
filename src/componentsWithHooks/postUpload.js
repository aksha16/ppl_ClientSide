import React, { useState, useEffect } from "react";
import axios from "axios";

const Upload = (props) => {
  const [category, setCategory] = useState([]);
  const email = localStorage.getItem("email");
  const now = new Date();

  useEffect(()=> {
    axios.post('http://localhost:3002/user/login/category').then(res => {
      setCategory(res.data);
      console.log('category data post upload ones. ', category);
     
    });

  },[]);

  const handleSubmit = event => {
    event.preventDefault();
    //console.log("state:", this.state);
    var formData = new FormData(document.getElementById("form123"));
    formData.append("email", email);
    formData.append("date", now.toDateString());
    formData.append("time", now.toLocaleTimeString());
    // this.props.handleNewPost(formData, '1');
    axios
      .post("http://localhost:3002/user/login/upload", formData)
      .then(res => {
        console.log("resUploadData", res.data);
        props.handleNewPost(res.data, '1');
        props.handleUploadPost(false);
      });
     
  };
    return (
      <div className="content">
        <div className="register_sec">
          {/* <h1>Upload your Picture</h1> */}
          <form onSubmit={handleSubmit} id="form123">
            <ul>
              <li>
                <span>Picture</span>
                <input
                  type="file"
                  name="image"
                  required
                />
              </li>
              <li>
                <span>Caption</span>
                <textarea
                  placeholder="Write your caption here..."
                  name="caption"
                  required
                />
              </li>
              <li>
                 

                <label for="category">Choose the category</label>
                <select
                  id="category"
                  name="category"
                >
                 {category.map((data, id) => {
                  return (

                  
                  <option>
                    {data.category.toUpperCase()}
                  </option>
                  
                  )
                })}
                </select>
              </li>
              <li>
                <input type="submit" name="upload " value="Upload" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  
};

export default Upload;
