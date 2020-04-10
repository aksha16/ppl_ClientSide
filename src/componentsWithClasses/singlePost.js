import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { singlePost: [], picsrc: "/uploadPics/" };
    console.log("single post is been called or what !!", this.props);
  }
  componentDidMount() {
    axios
      .post("http://localhost:3002/posting/singlePost", {
        id: this.props.match.params._id
      })
      .then(res => {
        this.setState({ singlePost: res.data });
        console.log("}}}}}}}}}", this.state);
      });
  }

  handleLikes = e => {
    e.preventDefault();
    let oldpics = this.state.singlePost;
    axios
      .post("http://localhost:3002/posting/likes", {
        _id: this.props.match.params._id,
        email: this.props.state.userData.email
      })
      .then(res => {
        if (res.data.nModified === 1) {
          console.log("likes added !! ", res);
          oldpics.likedBy.push("1");
          this.setState({ pics: oldpics });

          console.log("likes changed :", this.state.pics.likes);
        } else {
          oldpics.likedBy.pop();
          this.setState({ pics: oldpics });
        }
      });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log("single post comment", this.state.comment);
    });
  };

  handleComments = e => {
    let oldPost = this.state.singlePost;
    if (this.state.comment != "") {
      axios
        .post("http://localhost:3002/posting/singlePost/addComments", {
          _id: this.props.match.params._id,
          comment: this.state.comment,
          email: this.props.state.userData.firstname + " " +this.props.state.userData.lastname
        })
        .then(res => {
          console.log("comment output has come", res);
          oldPost.comments.push(res.data);
          this.setState({ singlePost: oldPost, comment: "" });
          console.log("oldpost which is updated now", this.state.singlePost);
          document.getElementById("comment").value = "";
        });
    }
  };

  render() {
    return (
      <div className="content_lft">
        <div className="contnt_2">
          <div className="div_a">
            <div className="div_title">{this.state.singlePost.caption}</div>
            <div className="btm_rgt">
              <div className="btm_arc">{this.state.singlePost.category}</div>
            </div>
            <div className="div_top">
              <div className="div_top_lft">
                <img src="/images/img_6.png" />
                {this.state.singlePost.postedBy}
              </div>
              <div className="div_top_rgt">
                <span className="span_date">
                  {this.state.singlePost.date
                    ? this.state.singlePost.date.slice(0, 10)
                    : ""}
                </span>
                <span className="span_time">
                  {this.state.singlePost.date
                    ? this.state.singlePost.date.slice(11, 19)
                    : ""}
                </span>
              </div>
            </div>
            <div className="div_image">
              <img
                src={this.state.picsrc + this.state.singlePost.image}
                alt="pet"
              />
            </div>
            <div className="div_btm">
              <div className="btm_list">
                <ul>
                  <li>
                    <a href="#">
                      <span className="btn_icon">
                        <img src="/images/icon_001.png" alt="share" />
                      </span>
                      Share
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="btn_icon">
                        <img src="/images/icon_002.png" alt="share" />
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
                          this.state.singlePost._id,
                          this.state.singlePost.email
                        );
                      }}
                    >
                      <span className="btn_icon" style={this.state.likesStyle}>
                        <img src="/images/icon_003.png" alt="share" />
                      </span>
                      {this.state.singlePost.likedBy
                        ? this.state.singlePost.likedBy.length
                        : 0}
                      likes
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="btn_icon">
                        <img src="/images/icon_004.png" alt="share" />
                      </span>
                      {this.state.singlePost.comments
                        ? this.state.singlePost.comments.length
                        : 0}
                      Comments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {this.state.singlePost.comments
          ? this.state.singlePost.comments.map((data, id) => {
              return (
                <div className="contnt_3">
                  <ul>
                    <li>
                      <div className="list_image">
                        <div className="image_sec">
                          <img src="/images/post_img.png" />
                        </div>
                        <div className="image_name">{data.commentedBy}</div>
                      </div>

                      <div className="list_info">{data.comment}</div>
                      {/* <input type="button" defaultValue="Reply" className="orng_btn" /> */}
                    </li>
                  </ul>
                </div>
              );
            })
          : ""}
        <div className="contnt_3">
          <ul>
            <li>
              <div className="cmnt_div1">
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  placeholder="Enter your Comment.."
                  className="cmnt_bx1"
                  onChange={this.handleChange}
                />
                <input
                  type="submit"
                  className="sub_bttn1"
                  defaultValue="Submit Comment"
                  onClick={this.handleComments}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.userData };
};

export default connect(mapStateToProps)(SinglePost);
