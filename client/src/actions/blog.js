import axios from "axios";
import { setAlert } from "./alert";
import TYPES from "./types";

// Get Blogs
export const getBlogs = (start, size) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/blogs?start=${start}&size=${size}`);
    dispatch({
      type: TYPES.GET_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get More Blogs
export const getMoreBlogs = (start, size) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/blogs?start=${start}&size=${size}`);
    dispatch({
      type: TYPES.GET_MORE_BLOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Search
export const getBlogSearch = (search, select) => async (dispatch) => {
  try {
    const res = await axios.get("/api/blogs");
    let p = [];

    switch (select) {
      case "title":
        p = res.data.filter((blog) => blog.title.includes(search));
        break;
      case "tag":
        p = res.data.filter((blog) => blog.tags.includes(search));
        break;
      case "author":
        p = res.data.filter((blog) => blog.name.includes(search));
        break;
      default:
        break;
    }
    dispatch({
      type: TYPES.GET_SEARCH,
      payload: p,
    });
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get Blog
export const getBlog = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/blogs/${id}`);
    dispatch({
      type: TYPES.GET_BLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/blogs/like/${id}`);
    dispatch({
      type: TYPES.UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/blogs/unlike/${id}`);
    dispatch({
      type: TYPES.UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete blog
export const deleteBlog = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/blogs/${id}`);
    dispatch({
      type: TYPES.DELETE_BLOG,
      payload: id,
    });
    dispatch(setAlert("Blog Removed", "success"));
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add blog
export async function addBlog(blog, photo) {
  let bodyFormData = new FormData();
  bodyFormData.set("blog", JSON.stringify(blog));
  bodyFormData.append("photo", photo);
  console.log(blog);
  console.log(photo);

  return await axios({
    method: "POST",
    url: "/api/blogs",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  });
}

// Add comment
export const addComment = (blogId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `/api/blogs/comment/${blogId}`,
      formData,
      config
    );
    dispatch({
      type: TYPES.ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (blogId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/blogs/comment/${blogId}/${commentId}`);
    dispatch({
      type: TYPES.REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {
    dispatch({
      type: TYPES.BLOG_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
