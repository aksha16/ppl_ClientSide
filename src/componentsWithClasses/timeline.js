import React from "react";
import Timelinelft from "./timelinergt";
import Timelinergt from "./timelinelft";
import { Switch, Route, Redirect } from "react-router-dom";
import Upload from "./postUpload";
import Profile from "./profile";
import Category from "./categoryUpload";
import SinglePost from "./singlePost";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      flag: "",
      newCategory: [],
      flag1: "",
      newPost: [],
      flag2: ""
    };
  }

  handleNewPost = (e, b) => {
    e.likedBy = [];
    this.setState({ newPost: e });
    this.setState({ flag2: b });
    console.log("does post has come or not ", e, b);
  };

  handleCat = (e, b) => {
    this.setState({ category: e });
    this.setState({ flag: b });

    console.log("parentOfCategory", e, b);
  };
  handleUploadedCategory = (newCat, flag1) => {
    this.setState({ newCategory: newCat, flag1: flag1 });
    console.log(
      "category came from child",
      this.state.newCategory,
      this.state.flag1
    );
  };
  componentDidMount() {}

  render() {
    {
      if (localStorage.getItem("email")) {
        return (
          <div>
            <Switch>
              <Route
                path="/login/timeline/upload"
                render={props => (
                  <Upload {...props} handleNewPost={this.handleNewPost} />
                )}
              />
              <Route path="/login/timeline/profile" component={Profile} />
              <Route
                path="/login/timeline/category"
                render={props => (
                  <Category
                    {...props}
                    handleNewCat={this.handleUploadedCategory}
                  />
                )}
              />
              {/* //</Switch><Route path='/login/timeline/' */}
            </Switch>
            <Switch>
              <Route
                path="/login/timeline/singlepost/:_id"
                render={props => <SinglePost {...props} />}
              />
              <Route path="/">
                <Timelinelft
                  passCat={this.handleCat}
                  newCategory={this.state.newCategory}
                  flag1={this.state.flag1}
                  handleNewCat={this.handleUploadedCategory}
                />
                <Timelinergt
                  category={this.state.category}
                  flag={this.state.flag}
                  passCat={this.handleCat}
                  handleNewPost={this.handleNewPost}
                  newPost={this.state.newPost}
                  flag2={this.state.flag2}
                />
              </Route>
            </Switch>
          </div>
        );
      }
    }
  }
}
