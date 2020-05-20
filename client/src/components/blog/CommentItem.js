import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment } from "../../actions/blog";
import Moment from "react-moment";

const CommentItem = ({
  blogId,
  comment: { _id, text, name, avatar, user, date },
  deleteComment,
  auth,
}) => {
  return (
    <div className="row bg-light p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="rounded-circle shadow  m-2" src={avatar} alt="" />
          <h4 className="text-center m-2 text-primary">{name}</h4>
        </Link>
      </div>
      <div className="col-sm-9 m-2">
        <p className="my-1">{text}</p>
        <span>
          <span className="font-weight-bold">Posted on </span>
          <Moment format="DD/MM/YYYY">{date}</Moment>
        </span>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => deleteComment(blogId, _id)}
            type="button"
            className="btn btn-danger ml-2"
          >
            <i className="fas fa-trash" />
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  blogId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
