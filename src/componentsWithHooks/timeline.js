import React, { useState } from "react";
import Timelinelft from "./timelinelft";
import Timelinergt from "./timelinergt";
import { Switch, Route, Redirect } from "react-router-dom";
import Upload from "./postUpload";
import Profile from "./profile";
import Login from "./login";
// import Category from "./categoryUpload";
// import SinglePost from "./singlePost";

const Timeline = (props) => {

  const category = useState("");
  const flag = useState("");
  const newCategory = useState([]);
  const [flag1, setFlag1] = useState("");
  const [newPost, setNewPost] = useState([]);
  const [flag2, setFlag2] = useState("");

  //this handle new post coming ++++++++++
  const handleNewPost = (e, b) => {
    setNewPost(e);
    setFlag2(b);
    console.log("does post has come or not ", e, b);
  };

//this handle category +++++++++++
//   const handleCat = (e, b) => {
//     category[1](e);
//     flag[1](b);
//     console.log("parentOfCategory", e, b);
//   };

    // this handle new upload category +++++++
//   const handleUploadedCategory = (newCat, flag1) => {
//     newCategory[1](newCat);
//     flag1[1](flag1);
//     console.log(
//       "category came from child",
//       newCategory,
//       flag1
//     );
//   };

    {
      if (localStorage.getItem("email")) {
        return (
          <div>
            <Switch>
               <Route
                
                path="/login/timeline/upload"
                render={props => (
                  <Upload {...props} handleNewPost={handleNewPost} />
                )}
              />
              <Route path="/login/timeline/profile" component={Profile} />
              {/* <Route
                path="/login/timeline/category"
                render={props => (
                  <Category
                    {...props}
                    handleNewCat={this.handleUploadedCategory}
                  />
                )}
              /> */}
            </Switch>

            <Switch>
              {/* <Route path="/login/timeline/singlepost/:_id" render={(props) => ( <SinglePost {...props} />)}/> */}
              <Route path="/login/timeline">
                <Timelinergt
                />
                <Timelinelft
                newPost={newPost}
                flag2={flag2}
                handleNewPost={handleNewPost}
                />
              </Route>
            </Switch>
          </div>
        );
      }
      else return <Login />
    }
};

export default Timeline;
