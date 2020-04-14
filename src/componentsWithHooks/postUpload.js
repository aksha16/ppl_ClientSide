import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

const Upload = (props) => {
  const {state, handleNewPost, handleUploadPost} = props;
  const [category, setCategory] = useState([]);
  const id = state.userData._id;
  useEffect(()=> {
    axios.post('http://localhost:3002/categoring/showcategory').then(res => {
      setCategory(res.data);
      console.log('category data post upload ones. ', category);
     
    });

  },[]);

  const handleSubmit = event => {
    event.preventDefault();
    var formData = new FormData(document.getElementById("form123"));
    formData.append("postedBy", id);
    axios
      .post("http://localhost:3002/posting/upload", formData)
      .then(res => {
        console.log("resUploadData", res.data);
        handleNewPost(res.data, '1');
        handleUploadPost(false);
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
                    {data.name.toUpperCase()}
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

const mapStateToProps = state => {
  return {state:state.userData};
};

export default connect(mapStateToProps)(Upload);
