import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Upload from './postUpload';
import Category from './categoryUpload';

const Timelinergt = (props) => {
  const {} = props;
  const [category, setCategory] = useState([]);
  const catsrc = '/categoryPics/';
  const [featuredCat, setFeaturedCat] = useState([]);
  const [showPostUpload, setShowPostUpload] = useState(false);
  const [showCategoryUpload, setShowCategoryUpload] = useState(false);



  const handleClick = (e) => {
    e.preventDefault();
    props.handleCategorization(e.target.name, "1");
    };
  

const handleUploadPost = (e) => {
    setShowPostUpload(e);
    console.log("lets see what up load post has given to show", e)
}

const handleUploadCategory = (e) => {
    setShowCategoryUpload(e);
    console.log("lets see what's up with category upload ", e);

}


  useEffect(()=>{
    axios.post('http://localhost:3002/categoring/showcategory').then(res => {
        setCategory(res.data);
        console.log('category data ', res.data);
  
        let i = 3;
      const featuredCat = [];
      if(i <= res.data.length){
      while(i--){
        const n = Math.floor(Math.random()*res.data.length);
        if(featuredCat.includes(res.data[n])) continue;
        featuredCat.push(res.data[n]);
        console.log("achhaa", n)
      }
      setFeaturedCat(featuredCat);
      console.log("hahahahahahah", featuredCat, category);}
       
      });

  },[]);

  useEffect( () => {
    if(props.flag1==="1"){
        let cat = category;
        cat.push(props.newCategory);
        setCategory(cat);
        console.log("new category came from parent :", props.newCat);
        props.handleNewCategory([], "");}

  })

  
    return (
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
            <Link onClick={() => handleUploadPost(!showPostUpload)}>Upload Post</Link>{" "}
          </div>
          {showPostUpload?<Upload handleNewPost={props.handleNewPost} handleUploadPost={handleUploadPost} />:""}
          <div className="rght_btn">
            {" "}
            <span className="rght_btn_icon">
              <img src="/images/btn_icona.png" alt="up" />
            </span>{" "}
            <span className="btn_sep">
              <img src="/images/btn_sep.png" alt="sep" />
            </span>{" "}
            <Link onClick={() => handleUploadCategory(!showCategoryUpload)} >Upload Category</Link>
          </div>
          {showCategoryUpload?<Category handleNewCategory={props.handleNewCategory} handleUploadCategory={handleUploadCategory} />:""}
          <div className="rght_cate">
            <div className="rght_cate_hd" id="rght_cat_bg">
              Categories
            </div>



            {category.map((data, id) => {
              return(
              
              <div className="rght_list">
              <ul>
                <li>
                  <a href='' name={data.name.toLowerCase()} onClick={handleClick}>
                    <span className="list_icon" >
                      <img src={catsrc + data.image} style={{height:'39px', width:'39px'}} />
                    </span>{" "}
                    
                    {data.name} 
                    
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
            {featuredCat.map((data, id) => {
              return(
                <div className="sub_dwn">
                <div className="feat_sec">
                <div className="feat_sec_img">
                  <img src= {catsrc + data.image} alt="image" />
                </div>
              <div className="feat_txt"><b>Description: </b>{data.description}</div>
                <div className="btm_rgt">
              <div className="btm_arc">{data.name}</div>
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

export default Timelinergt;
