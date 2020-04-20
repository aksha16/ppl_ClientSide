import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = props => {
  const { postPerPage, totalPost, paginate } = props;
  const pageNumber = [];
  const [number, setNumber] = useState(1);
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  const changePageNumber = (n) => {
    setNumber(n);
  };

  const increamentPageNumber = () => {
      const n = number;
      setNumber(n+1);
      paginate(n+1);

  };

  const decreamentPageNumber = () => {
      const n = number;
      setNumber(n -1);
      paginate(n-1);
  }


  return (
    <div className="pagination">
        {console.log("number lets seeeee ====", number)}
      <ul style={{ margin: "13px" }}>
          {number > 1 ?
        <li>
          <Link onClick={() => decreamentPageNumber()}>Previous</Link>
        </li> : '' }
        {pageNumber.map(Pagenumber => (
          <li key={Pagenumber}>
            <Link onClick={() =>{ paginate(Pagenumber); changePageNumber(Pagenumber)}}>{Pagenumber}</Link>
          </li>
        ))}
        {number< Math.ceil(totalPost / postPerPage) ?
        <li>
          <Link onClick={ () => increamentPageNumber()}>Next</Link>
        </li> : '' }
      </ul>
    </div>
  );
};

export default Pagination;
