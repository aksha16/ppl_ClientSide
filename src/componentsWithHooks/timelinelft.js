import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import Profile from "./profile";
import { connect, useSelector } from "react-redux";
import { userAction } from "../redux/actions";
import Pagination from './pagination';

const Timelinelft = props => {
  // needs changes
  const { flag2, state } = props;
  const [pics, setPics] = useState([]);
  const picsrc = "/uploadPics/";
  const now = new Date();
  const [category, setCategory] = useState("");
  const noPost = useState(0);
  const [flag, setFlag] = useState(1);
  const [picsCopy, setPicsCopy] = useState([]);
  const user = useSelector(state => state.userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);

  //get current post 
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPost = pics.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    //pageNumber.preventDefault();
    setCurrentPage(pageNumber);
    console.log("cureentpost", currentPost);
  }
  useEffect(() => {
    console.log("Timeleft didmount", user.userData.email, "hahah");
    return () => {
      console.log("timeline left unmount");
    };
  });

  useEffect(() => {
    axios.post("http://localhost:3002/post/showpost").then(res => {
      console.log("server dataaaaaa: ", res.data);
      setPics(res.data);
      setPicsCopy(res.data);
      console.log("dekhte hai ..", pics);
    });
    console.log("timelinelft lets see your props", state);
  }, []);

  useEffect(() => {
    if (props.flag2 === "1") {
      let post = picsCopy;
      //post.unshift(props.newPost);
      setPics([props.newPost, ...pics]);
      props.handleNewPost([], "");

      console.log("alllll+++++++++++=======", props.newPost, props.flag2, post);
    }
  });

  useEffect(() => {
    if (props.flag === "1") {
      setCategory(props.category);
      console.log("okayyyyyyy");
      props.handleCategorization("", "");
    }
  });

  const handleLikes = (e, id, email) => {
    e.preventDefault();
    console.log("id check:", id);
    let index = pics.findIndex(x => x._id === id);
    console.log("index:", index, pics[index].likes);
    let oldpics = [...pics];
    axios
      .post("http://localhost:3002/post/likes", {
        _id: id,
        email: user.userData.email
      })
      .then(res => {
        if (res.data.nModified === 1) {
          console.log("likes added !! ", res);
          oldpics[index].likedBy.push("1");
          setPics(oldpics);

          console.log("likes changed :", pics[index].likes);
        } else {
          oldpics[index].likedBy.pop();
          setPics(oldpics);
        }
      });
  };

  const handleOldestFirst = e => {
    e.preventDefault();
    let oldestfirst = [...picsCopy.reverse()];
    if (flag === 1) {
      setPics(oldestfirst);
      setFlag(0);
      setCategory("");
    }
    console.log("oldest first flag", pics);
  };

  const handleLatestFirst = e => {
    e.preventDefault();
    let latestfirst = [...picsCopy.reverse()];
    if (flag === 0) {
      setPics(latestfirst);
      setFlag(1);
      setCategory("");
    }
  };

  const mostliked = e => {
    e.preventDefault();
    let mostLiked = [...picsCopy];
    let n = 0;
    for (let i = 0; i < mostLiked.length; i++) {
      if (mostLiked[i].likedBy.length > n) {
        n = mostLiked[i].likedBy.length;
      }
    }
    let mostLikedPic = [];
    for (let i = 0; i < mostLiked.length; i++) {
      if (mostLiked[i].likedBy.length === n) {
        mostLikedPic.push(mostLiked[i]);
      }
    }
    setPics(mostLikedPic);
    setCategory("");
  };

  const mostCommented = e => {
    e.preventDefault();
    let mostCommented;
    mostCommented = [...picsCopy];

    let n = 0;
    for (let i = 0; i < mostCommented.length; i++) {
      if (mostCommented[i].comments.length > n) {
        n = mostCommented[i].comments.length;
      }
    }
    let mostCommentedArr = [];
    for (let i = 0; i < mostCommented.length; i++) {
      if (mostCommented[i].comments.length === n) {
        mostCommentedArr.push(mostCommented[i]);
      }
    }
    setPics(mostCommentedArr);
    setCategory("");
  };

  // mostPet = e => {
  //   e.preventDefault();
  //   let mostPet = [...this.state.picsCopy];
  //   let petNumber = {};
  //   for (let i =0; i < mostPet.length; i++){
  //     if(petNumber.mostPet[i].category === undefined){
  //       console.log("yeh chala ")
  //       petNumber[mostPet[i].category] = 1;
  //     } else petNumber[mostPet[i].category]++;
  //   }
  //   console.log("lets most pet", petNumber);

  // }

  return (
    <div>
      <meta charSet="utf-8" />
      <title>Home</title>
      <Profile />
      <div className="content_lft">
        <div className="contnt_1">
          <div className="post_div">
            <div className="post_list">
              <ul>
                <li>
                  <a href="" onClick={handleLatestFirst}>
                    <span className="list_img">
                      <img src="/images/img_1.png" />
                    </span>
                    Latest First
                  </a>
                </li>
                <li>
                  <a href="" onClick={handleOldestFirst}>
                    <span className="list_img">
                      <img src="/images/img_2.png" />
                    </span>
                    Oldest First
                  </a>
                </li>
                {/* <li>
                    <a href="" onClick={this.mostPet}>
                      <span className="list_img">
                        <img src="/images/img_3.png" />
                      </span>
                      Most Pet
                    </a>
                  </li>  */}
                <li>
                  <a href="" onClick={mostliked}>
                    <span className="list_img">
                      <img src="/images/img_4.png" />
                    </span>
                    Most Liked
                  </a>
                </li>
                <li>
                  <a href="" onClick={mostCommented}>
                    <span className="list_img">
                      <img src="/images/img_5.png" />
                    </span>
                    Most Commented
                  </a>
                </li>
              </ul>
              {/* <div className="post_txt">4 New Post Updates</div> */}
            </div>
          </div>
          {console.log("haahaaaaaaaa+++", pics)}
          {currentPost.map((data, id) => {
            {
              if (data.category === category || category === "") {
                return (
                  <div>
                    <Link to={`/timeline/singlepost/${data._id}`}>
                      <div className="contnt_2">
                        <div className="div_a">
                          <div className="div_title">{data.caption}</div>
                          <div className="btm_rgt">
                            <div className="btm_arc">{data.category}</div>
                          </div>
                          <div className="div_top">
                            <div className="div_top_lft">
                              <img src="/images/img_6.png" />
                              {data.postedBy.firstname +
                                " " +
                                data.postedBy.lastname}
                            </div>
                            <div className="div_top_rgt">
                              <span className="span_date">
                                {data.date ? data.date.slice(0, 10) : ""}
                              </span>
                              <span className="span_time">
                                {data.date ? data.date.slice(11, 19) : ""}
                              </span>
                            </div>
                          </div>
                          <div className="div_image">
                            <img src={picsrc + data.image} alt="pet" />
                          </div>
                          <div className="div_btm">
                            <div className="btm_list">
                              <ul>
                                <li>
                                  <a href="">
                                    <span className="btn_icon">
                                      <img
                                        src="/images/icon_001.png"
                                        alt="share"
                                      />
                                    </span>
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <span className="btn_icon">
                                      <img
                                        src="/images/icon_002.png"
                                        alt="share"
                                      />
                                    </span>
                                    Flag
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href=""
                                    onClick={e => {
                                      handleLikes(e, data._id, data.email);
                                    }}
                                  >
                                    <span className="btn_icon">
                                      <img
                                        src="/images/icon_003.png"
                                        alt="share"
                                      />
                                    </span>
                                    {data.likedBy ? data.likedBy.length : 0}{" "}
                                    likes
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="btn_icon">
                                      <img
                                        src="/images/icon_004.png"
                                        alt="share"
                                      />
                                    </span>
                                    {data.comments ? data.comments.length : 0}{" "}
                                    comments
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            }
          })}
        </div>
        <Pagination postPerPage={postPerPage} totalPost={pics.length} paginate={paginate}/>
      </div>
    </div>
  );
};


export default Timelinelft;
