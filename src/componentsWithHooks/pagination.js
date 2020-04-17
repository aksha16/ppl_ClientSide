import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = props => {
  const { postPerPage, totalPost, paginate } = props;
  const pageNumber = [];
  const [number, setNumber] = useState(1);
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
   
      <div className="pagination">
        <ul style={{margin:'13px'}}>
            <li>
                <Link onClick= {() => paginate(number-1)}>Previous</Link>
            </li>
          {pageNumber.map(number => (
            <li key={number}>
              <Link onClick={() => paginate(number)}>{number}</Link>
            </li>
          ))}
          <li>
              <Link onClick ={() => paginate(number+1)}>Next</Link>
          </li>
        </ul>
      </div>
  );
};

export default Pagination;
