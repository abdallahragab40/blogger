import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/blog";

const CommentForm = ({ blogId, addComment }) => {
  const [text, setText] = useState("");
  return (
    <div className="post-form">
      <div className="bg-primary text-light p-2 p">
        <h3>Leave a Comment</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(blogId, { text });
          setText("");
        }}
      >
        <div className="form-group">
          <label htmlFor="text">Comment</label>
          <textarea
            className="form-control"
            id="text"
            rows={3}
            required
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button className="btn btn-dark my-1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
