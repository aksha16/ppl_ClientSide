import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
//import SinglePost from "./singlePost";

 const Timelinelft = (props) => {

  const [pics, setPics] = useState([]);
  const picsrc = "/uploadPics/";
  const now = new Date();
  const category = useState([]);
  const noPost = useState(0);
  const flag = useState(1);
  const [picsCopy, setPicsCopy] = useState([]);
  const lp = useState("aaaaaa");


  const handleCategory = () => {
    axios.post("http://localhost:3002/user/login/post").then(res => {
      console.log("server dataaaaaa: ", res.data);
          setPicsCopy(res.data);
    //   this.setState({ pics: res.data, picsCopy:res.data });
    //   this.setState({ category: props.category });
    });
  };

  useLayoutEffect(async () => {
    await axios.post("http://localhost:3002/user/login/post").then(res => {
      console.log("server dataaaaaa: ", res.data);
    //   this.setState({ pics: res.data, picsCopy:res.data });
    //   this.setState({ category: props.category });
    setPics(res.data);
    setPicsCopy(res.data);
    console.log("dekhte hai ..",pics);


    });
  },[]);

//   useLayoutEffect(() => {
//       console.log("pics are working", pics);
//   })

  useEffect(() => {
    if (props.flag2 === "1") {
        let post = picsCopy;
        post.unshift(props.newPost);
        setPics(post);
        props.handleNewPost([], "");
  
        console.log(
          "alllll+++++++++++=======",
          props.newPost,
          props.flag2,
          post
        );
      }
  
//       if (this.props.flag === "1") {
//         this.setState({ category: this.props.category });
//         console.log("okayyyyyyy");
//         this.props.passCat("", "");
//       }
//       // this.setState({'category':res.data});
//       console.log("dekhte hai ..", this.state);
//       console.log("alrighht lets see post props ");
      

 })
  

//   const handleLikes = (e, id, email) => {
//     e.preventDefault();
//     console.log("hahkamjhak Likes");
//     //this.setState({'likes':this.state.likes + 1});
//    // console.log("these are our likes count :", likes);
//     console.log("id check:", id);
//     let index = pics.findIndex(x => x._id === id);
//     //this.setState({likesIndex:index});
//     //this.setState({[this.state.pics[index].likes] : this.state.pics[index].likes + 1 });
//     console.log("index:", index, pics[index].likes);
//     let oldpics = [...pics];
//     axios
//       .post("http://localhost:3002/user/login/likes", {
//         _id: id,
//         email: localStorage.getItem("email")
//       })
//       .then(res => {
//         if (res.data.nModified === 1) {
//           console.log("likes added !! ", res);
//           oldpics[index].likedBy.push("1");
//           this.setState({ pics: oldpics });

//           console.log("likes changed :", pics[index].likes);
//         } else {
//           oldpics[index].likedBy.pop();
//           this.setState({ pics: oldpics });
//         }
//       });
//   };

//   componentDidUpdate(prevState) {
//     // axios.post('http://localhost:3002/user/login/showCategory').then(res => {
//     //   console.log("categories response of category : ", res);

//     if (this.props.flag2 === "1") {
//       let post = this.state.picsCopy;
//       post.unshift(this.props.newPost);
//       this.setState({ pics: post });
//       this.props.handleNewPost([], "");

//       console.log(
//         "alllll+++++++++++=======",
//         this.props.newPost,
//         this.props.flag2,
//         post
//       );
//     }

//     if (this.props.flag === "1") {
//       this.setState({ category: this.props.category });
//       console.log("okayyyyyyy");
//       this.props.passCat("", "");
//     }
//     // this.setState({'category':res.data});
//     console.log("dekhte hai ..", this.state);
//     console.log("alrighht lets see post props ");
//   }

//   const handleOldestFirst = e => {
//     e.preventDefault();
//     let oldestfirst = [...this.state.picsCopy.reverse()];
//     if (this.state.flag === 1) {
//       this.setState({ pics: oldestfirst, flag: 0, category:'' }, () => {
//         console.log("oldest first flag inside", flag);
//       });
      
//     }
//     console.log("oldest first flag", pics);
   
//   };

//   const handleLatestFirst = e => {
//     e.preventDefault();
//     let latestfirst = [...picsCopy.reverse()];
//     if (this.state.flag === 0) {
//       this.setState({ pics: latestfirst, flag: 1, category:'' }, () => {
//         console.log("latest first flag inside", this.state.flag);
//       });
     
//     }
//     console.log("latest first flag", this.state.flag);
//   };

//   const mostliked = e => {
//     e.preventDefault();
//     let mostLiked = [...this.state.picsCopy];
//     let n = 0;
//     for (let i = 0; i < mostLiked.length; i++) {
//       if (mostLiked[i].likedBy.length > n) {
//         n = mostLiked[i].likedBy.length;
//       }
//     }
//     console.log(" lets see what has came", n);
//     let mostLikedPic = [];
//     for (let i = 0; i < mostLiked.length; i++) {
//       if (mostLiked[i].likedBy.length === n) {
//         mostLikedPic.push(mostLiked[i]);
//       }
//     }
//     this.setState({ pics: mostLikedPic, category:''});
//   };

//   const mostCommented = e => {
//     e.preventDefault();
//     let mostCommented;
//     mostCommented = [...this.state.picsCopy]; 
    
//     let n = 0;
//     for (let i = 0; i < mostCommented.length; i++) {
//       if (mostCommented[i].comments.length > n) {
//         n = mostCommented[i].comments.length;
//       }
//     }
//     let mostCommentedArr = [];
//     for (let i = 0; i < mostCommented.length; i++) {
//       if (mostCommented[i].comments.length === n) {
//         mostCommentedArr.push(mostCommented[i]);
//       }
//     }
//     this.setState({ pics: mostCommentedArr, category:'' });
//   };

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
        {/* <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
          <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" /> */}

        <div className="content_lft">
          <div className="contnt_1">
            {/* <div className="post_div">
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
                  </li> 
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
                {/* <div className="post_txt">4 New Post Updates</div>
              </div>
            </div> */}
            {console.log("pics", pics)}
            {pics.map((data, id) => {
              {

                  return (
                    <div>
                      {/* <Switch>
                  <Route path = '/login/timeline/:data._id' component={SinglePost} />
                </Switch> */}

                      <Link to={`/login/timeline/singlepost/${data._id}`}>
                        <div className="contnt_2">
                          <div className="div_a">
                            <div className="div_title">{data.caption}</div>
                            <div className="btm_rgt">
                              <div className="btm_arc">{data.category}</div>
                            </div>
                            <div className="div_top">
                              <div className="div_top_lft">
                                <img src="/images/img_6.png" />
                                {data.email}
                              </div>
                              <div className="div_top_rgt">
                                <span className="span_date">{data.date}</span>
                                <span className="span_time">{data.time}</span>
                              </div>
                            </div>
                            <div className="div_image">
                              <img
                                src={picsrc + data.image}
                                alt="pet"
                              />
                              {console.log("this should work", data.image)}
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
                                    //   onClick={e => {
                                    //     handleLikes(
                                    //       e,
                                    //       data._id,
                                    //       data.email
                                    //     );
                                    //   }}
                                    >
                                      <span
                                        className="btn_icon"
                                      >
                                        <img
                                          src="/images/icon_003.png"
                                          alt="share"
                                        />
                                      </span>
                                      {data.likedBy?data.likedBy.length:0} likes
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
                                      {data.comments?data.comments.length:0} comments
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
            })}
          </div>
        </div>
      </div>
    );
};

export default Timelinelft;
