import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination justify-content-center mt-2">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to="/blogs"
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
