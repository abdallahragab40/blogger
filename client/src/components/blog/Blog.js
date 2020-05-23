import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getBlog } from "../../actions/blog";
import BlogItem from "../blogs/BlogItem";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Blog = ({ getBlog, blog: { blog, loading }, match }) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [getBlog, match.params.id]);

  return loading || blog === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/blogs" className="btn btn-info my-2">
        Back To Blogs
      </Link>
      <BlogItem blog={blog} showActions={false} />
      <CommentForm blogId={blog._id} />
      <div>
        {blog.comments?.map((comment) => (
          <CommentItem key={comment._id} comment={comment} blogId={blog._id} />
        ))}
      </div>
    </Fragment>
  );
};

Blog.propTypes = {
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlog })(Blog);
