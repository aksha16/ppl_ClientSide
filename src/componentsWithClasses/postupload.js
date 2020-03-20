import React from "react";
import axios from "axios";

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("email") || "NoEmail",
      now : new Date(),
      category:[]
    };
  }

  componentDidMount() {
    axios.post('http://localhost:3002/user/login/category').then(res => {
      this.setState({category:res.data});
      console.log('category data post upload ones. ', this.state);
     
    });

  }

  // handleChange = event => {
  //   //console.log("image:", event.target.files[0]);
  //   if (event.target.name === "image") {
  //     this.setState({ [event.target.name]: event.target.files[0] });
  //     console.log("ythik;l", event.target.files[0]);
  //   }else
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleSubmit = event => {
    event.preventDefault();
    console.log("state:", this.state);
    var formData = new FormData(document.getElementById("form123"));
    formData.append("email", this.state.email);
    formData.append("date", this.state.now.toDateString());
    formData.append("time", this.state.now.toLocaleTimeString());
   // console.log("category;;;;", this.state.category);
    // console.log("statesssssssssss", formData);
    // this.props.handleNewPost(formData, '1');
    axios
      .post("http://localhost:3002/user/login/upload", formData)
      .then(res => {
        console.log("resUploadData", res.data);
        this.props.handleNewPost(res.data, '1');
        this.props.history.push('/login/timeline');
      });
     
  };

  render() {
    return (
      <div className="content_lft">
        <div className="register_sec">
          <h1>Upload your Picture</h1>
          <form onSubmit={this.handleSubmit} id="form123">
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
                <span>Caption</span>
                <textarea
                  placeholder="Write your caption here..."
                  name="caption"
                  required
                  onChange={this.handleChange}
                />
              </li>
              <li>
                 

                <label for="category">Choose the category</label>
                <select
                  id="category"
                  name="category"
                  onChange={this.handleChange}
                >
                 {this.state.category.map((data, id) => {
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
  }
}
