import React from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import SinglePost from "./singlePost";

export default class Timelinergt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      picsrc: "/uploadPics/",
      now: new Date(),
      category: [],
      noPost: 0,
      flag: 1,
      picsCopy:[]
    };
  }

  handleCategory() {
    axios.post("http://localhost:3002/user/login/post").then(res => {
      console.log("server dataaaaaa: ", res.data);
      this.setState({ pics: res.data, picsCopy:res.data });
      this.setState({ category: this.props.category });
      console.log("dekhte hai ..", this.state);
    });
  }
  componentDidMount() {
    this.handleCategory();
  }

  handleLikes = (e, id, email) => {
    e.preventDefault();
    console.log("hahkamjhak Likes");
    //this.setState({'likes':this.state.likes + 1});
    console.log("these are our likes count :", this.state.likes);
    console.log("id check:", id);
    let index = this.state.pics.findIndex(x => x._id === id);
    //this.setState({likesIndex:index});
    //this.setState({[this.state.pics[index].likes] : this.state.pics[index].likes + 1 });
    console.log("index:", index, this.state.pics[index].likes);
    let oldpics = [...this.state.pics];
    axios
      .post("http://localhost:3002/user/login/likes", {
        _id: id,
        email: localStorage.getItem("email")
      })
      .then(res => {
        if (res.data.nModified === 1) {
          console.log("likes added !! ", res);
          oldpics[index].likedBy.push("1");
          this.setState({ pics: oldpics });

          console.log("likes changed :", this.state.pics[index].likes);
        } else {
          oldpics[index].likedBy.pop();
          this.setState({ pics: oldpics });
        }
      });
  };

  componentDidUpdate(prevState) {
    // axios.post('http://localhost:3002/user/login/showCategory').then(res => {
    //   console.log("categories response of category : ", res);

    if (this.props.flag2 === "1") {
      let post = this.state.picsCopy;
      post.unshift(this.props.newPost);
      this.setState({ pics: post });
      this.props.handleNewPost([], "");

      console.log(
        "alllll+++++++++++=======",
        this.props.newPost,
        this.props.flag2,
        post
      );
    }

    if (this.props.flag === "1") {
      this.setState({ category: this.props.category });
      console.log("okayyyyyyy");
      this.props.passCat("", "");
    }
    // this.setState({'category':res.data});
    console.log("dekhte hai ..", this.state);
    console.log("alrighht lets see post props ");
  }

  handleOldestFirst = e => {
    e.preventDefault();
    let oldestfirst = [...this.state.picsCopy.reverse()];
    if (this.state.flag === 1) {
      this.setState({ pics: oldestfirst, flag: 0, category:'' }, () => {
        console.log("oldest first flag inside", this.state.flag);
      });
      
    }
    console.log("oldest first flag", this.state.pics);
   
  };

  handleLatestFirst = e => {
    e.preventDefault();
    let latestfirst = [...this.state.picsCopy.reverse()];
    if (this.state.flag === 0) {
      this.setState({ pics: latestfirst, flag: 1, category:'' }, () => {
        console.log("latest first flag inside", this.state.flag);
      });
     
    }
    console.log("latest first flag", this.state.flag);
  };

  mostliked = e => {
    e.preventDefault();
    let mostLiked = [...this.state.picsCopy];
    let n = 0;
    for (let i = 0; i < mostLiked.length; i++) {
      if (mostLiked[i].likedBy.length > n) {
        n = mostLiked[i].likedBy.length;
      }
    }
    console.log(" lets see what has came", n);
    let mostLikedPic = [];
    for (let i = 0; i < mostLiked.length; i++) {
      if (mostLiked[i].likedBy.length === n) {
        mostLikedPic.push(mostLiked[i]);
      }
    }
    this.setState({ pics: mostLikedPic, category:''});
  };

  mostCommented = e => {
    e.preventDefault();
    let mostCommented;
    mostCommented = [...this.state.picsCopy]; 
    
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
    this.setState({ pics: mostCommentedArr, category:'' });
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

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Home</title>
        <div className="content_lft">
          <div className="contnt_1">
            <div className="post_div">
              <div className="post_list">
                <ul>
                  <li>
                    <a href="" onClick={this.handleLatestFirst}>
                      <span className="list_img">
                        <img src="/images/img_1.png" />
                      </span>
                      Latest First
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={this.handleOldestFirst}>
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
                  </li> */}
                  <li>
                    <a href="" onClick={this.mostliked}>
                      <span className="list_img">
                        <img src="/images/img_4.png" />
                      </span>
                      Most Liked
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={this.mostCommented}>
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

            {this.state.pics.map((data, id) => {
              {
                if (
                  data.category === this.state.category ||
                  this.state.category === ""
                ) {
                  return (
                    <div>
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
                                src={this.state.picsrc + data.image}
                                alt="pet"
                              />
                            </div>
                            <div className="div_btm">
                              <div className="btm_list">
                                <ul>
                                  <li>
                                    <a href="#">
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
                                    <a href="#">
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
                                        this.handleLikes(
                                          e,
                                          data._id,
                                          data.email
                                        );
                                      }}
                                    >
                                      <span
                                        className="btn_icon"
                                        style={this.state.likesStyle}
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
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
