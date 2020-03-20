import React from "react";
import { Link } from "react-router-dom";
import Timelinergt from './timelinelft'
import axios from "axios";
import Profile from './profile';

export default class Timelinelft extends React.Component {
  constructor(props){
    super(props);
    this.state = {category:[], catsrc:'/categoryPics/', featuredCat:[]};
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.passCat(e.target.name, "1");
    this.setState({'categoryNow' : e.target.name} , () => {
      console.log("stateOfcategory >>>>: ", this.state);
      })
    };
  
  handleUploadCategory = (e) => {
    e.preventDefault();
    console.log("categoryUpload")
    
  }

  componentDidMount(){
    console.log("kya chala yeh ????????????")
    axios.post('http://localhost:3002/user/login/category').then(res => {
      this.setState({category:res.data});
      console.log('category data ', this.state.category);

      let i = 3;
    const featuredCat = [];
    if(i <= this.state.category.length){
    while(i--){
      const n = Math.floor(Math.random()*this.state.category.length);
      if(featuredCat.includes(this.state.category[n])) continue;
      featuredCat.push(this.state.category[n]);
      console.log("achhaa", n)
    }
    this.setState({featuredCat:featuredCat});
    console.log("hahahahahahah", this.state);}
     
    });
    


   
  };        

  componentDidUpdate(){
    if(this.props.flag1==="1"){
    let cat = this.state.category;
    cat.push(this.props.newCategory);
    this.setState({category:cat});
    console.log("new category came from parent :", this.props.newCat);
    this.props.handleNewCat([], "");
    }

  }

  

  render() {
    return (
      // <div className="container">
      // <div className="content">
      <div>
        <div className="content_rgt">
          <div className="rght_btn">
            {" "}
            <span className="rght_btn_icon">
              <img src="/images/btn_iconb.png" alt="up" />
            </span>{" "}
            <span className="btn_sep">
              <img src="/images/btn_sep.png" alt="sep" />
            </span>{" "}
            <Link to="/login/timeline/upload">Upload Post</Link>{" "}
          </div>
          <div className="rght_btn">
            {" "}
            <span className="rght_btn_icon">
              <img src="/images/btn_icona.png" alt="up" />
            </span>{" "}
            <span className="btn_sep">
              <img src="/images/btn_sep.png" alt="sep" />
            </span>{" "}
            <Link to='/login/timeline/category' >Upload Category</Link>
          </div>
          <div className="rght_cate">
            <div className="rght_cate_hd" id="rght_cat_bg">
              Categories
            </div>



            {this.state.category.map((data, id) => {
              return(
              
              <div className="rght_list">
              <ul>
                <li>
                  <a href='' name={data.category.toLowerCase()} onClick={this.handleClick}>
                    <span className="list_icon" >
                      <img src={this.state.catsrc + data.image} style={{height:'39px', width:'39px'}} />
                    </span>{" "}
                    
                    {data.category} 
                    
                  </a>
                </li>
              </ul>
            </div>
            )
          })}
          </div>
          <div className="rght_cate">
            <div className="rght_cate_hd" id="opn_cat_bg">
              Featured
            </div>
            {this.state.featuredCat.map((data, id) => {
              return(
                <div className="sub_dwn">
                <div className="feat_sec">
                <div className="feat_sec_img">
                  <img src= {this.state.catsrc + data.image} alt="image" />
                </div>
              <div className="feat_txt"><b>Description: </b>{data.description}</div>
                <div className="btm_rgt">
              <div className="btm_arc">{data.category}</div>
                </div>
              </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
