import React from "react";
import axios from "axios";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = event => {
    this.setState({msg:"", inputStyle:{}});
    //console.log(event.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    let formdata = new FormData(document.getElementById("form12"));
    console.log("hellow form category data");
    axios
      .post("http://localhost:3002/user/login/categoryUpload", formdata)
      .then(res => {
          console.log("category responnnnnnnse>>>>", res.data)
          if(res.data.status){
            this.setState({msg:"Category already present", inputStyle:{border:'3px solid red'}});
            console.log("user can't upload new category..", this.state.msg, res.data);
          }
          else {
        console.log("response came from the backend ...", res.data);
        this.props.handleNewCat(res.data, "1");
         this.props.history.push("/login/timeline");
          }
      });
  };

  render() {
    return (
      <div className="content_lft">
        <div className="register_sec">
          <h1>Upload category's Picture</h1>
          <form onSubmit={this.handleSubmit} method='post' id="form12">
            <ul>
              <li>
                <span>Picture</span>
                <input
                  type="file"
                  name="image"
                  required
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <span>Category</span>
                <span style = {{color:'red'}}><b>{this.state.msg}</b></span>

                <input
                  type="text"
                  placeholder="Name your category"
                  name="category"
                  style={this.state.inputStyle}
                  required
                  onChange={this.handleChange}
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
  }
}
