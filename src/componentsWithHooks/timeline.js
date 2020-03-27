import React, { useState } from "react";
import Timelinelft from "./timelinelft";
import Timelinergt from "./timelinergt";
import { Switch, Route, Redirect } from "react-router-dom";
import Upload from "./postUpload";
import Profile from "./profile";
import Login from "./login";
// import Category from "./categoryUpload";
import SinglePost from "../componentsWithClasses/singlePost";

const Timeline = (props) => {

  const [category, setCategory] = useState("");
  const [flag, setFlag] = useState("");
  const [newCategory, setNewCategory] = useState([]);
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
  const handleCategorization = (e, b) => {
    setCategory(e);
    setFlag(b);
    console.log("parentOfCategory", e, b);
  };

// this handle new upload category +++++++
  const handleNewCategory = (newCat, flag1) => {
    setNewCategory(newCat);
    setFlag1(flag1);
    console.log(
      "category came from child",
      newCategory,
      flag1
    );
  };

        return (
          <div>
            <Switch>
              <Route path="/timeline/singlepost/:_id" render={(props) => ( <SinglePost {...props} />)}/>
              <Route path="/">
              <Timelinergt
              handleNewPost={handleNewPost}
              handleNewCategory={handleNewCategory}
              newCategory={newCategory}
              flag1={flag1}
              handleCategorization={handleCategorization}  
                />
              <Timelinelft
                newPost={newPost}
                flag2={flag2}
                handleNewPost={handleNewPost}
                category={category}
                flag={flag}
                handleCategorization={handleCategorization}
                />
                
              </Route>
            </Switch>
          </div>
        )
};

export default Timeline;
