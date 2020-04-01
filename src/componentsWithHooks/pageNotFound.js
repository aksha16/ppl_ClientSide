import React from 'react';

const PageNotFound = () =>{
    return(
        <div>
        <meta charSet="utf-8" />
        <title>Page Not Found</title>
       <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <h1>Page Not Found</h1>
                <h1 style={{fontWeight:'20px'}}>404 error</h1>
              </div>
            </div>
            <div className="content_lft">
            <p className="discrptn">The Url you're trying to reach to doesn't exist. </p>
            <img src="/images/logo512.png" alt="" style={{height:'450px'}} /> 
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    )
};

export default PageNotFound;