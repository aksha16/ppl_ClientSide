import React, { useState, useEffect } from "react";
import axios from "axios";

const Category = (props) =>  {
  const [msg, setMsg] = useState("");
  const [inputStyle, setInputStyle] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    let formdata = new FormData(document.getElementById("form12"));
    console.log("hello form category data");
    axios
      .post("http://localhost:3002/categoring/categoryUpload", formdata)
      .then(res => {
          console.log("category responnnnnnnse>>>>", res.data)
          if(res.data.status){
              setMsg("Category already present");
              setInputStyle({border:'3px solid red'});
            console.log("user can't upload new category..", msg, res.data);
          }
          else {
              setMsg("");
              setInputStyle({});
        console.log("response came from the backend ...", res.data);
        props.handleNewCategory(res.data, "1");
         props.handleUploadCategory(false);
          }
      });
  };
    return (
      <div className="content">
        <div className="register_sec">
          {/* <h1>Upload category's Picture</h1> */}
          <form onSubmit={handleSubmit} method='post' id="form12">
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
                <span>Category</span>
                <span style = {{color:'red'}}><b>{msg}</b></span>

                <input
                  type="text"
                  placeholder="Name your category"
                  name="name"
                  style={inputStyle}
                  required
                />
              </li>
              <li>
                <span>Description</span>
                <textarea
                  placeholder="Write description about category"
                  name="description"
                />
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

export default Category;
