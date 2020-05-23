import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBlogs, getBlogSearch, getMoreBlogs } from "../../actions/blog";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import BlogItem from "./BlogItem";
import Pagination from "../layout/Pagination";

const Blogs = ({
  getBlogs,
  getBlogSearch,
  getMoreBlogs,
  blog: { blogs, loading, filteredBlogs, start, size },
}) => {
  const [btn, setBtn] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(4);

  // Get current Blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getBlogs(start, size);
    getBlogSearch();
  }, [getBlogs, getBlogSearch]);

  const loadMore = () => {
    setBtn(true);
    getMoreBlogs(start, size);
  };
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Blogs</h1>
      <div>
        {filteredBlogs.length > 0 ? (
          <h1>Search Result</h1>
        ) : (
          <h1>Latest Blogs</h1>
        )}

        {filteredBlogs?.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div>

      <div>
        {currentBlogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="border border-light p-3 mb-4">
        <div className="text-center">
          <button
            hidden={btn}
            onClick={loadMore}
            type="button"
            className="btn btn-primary"
          >
            Load More
          </button>
        </div>
      </div>

      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogs.length}
        paginate={paginate}
      />
    </Fragment>
  );
};

Blogs.propTypes = {
  getBlogs: PropTypes.func.isRequired,
  getBlogSearch: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, {
  getBlogs,
  getBlogSearch,
  getMoreBlogs,
})(Blogs);
