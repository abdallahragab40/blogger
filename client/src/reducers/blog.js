import TYPES from "../actions/types";

const initialState = {
  blogs: [],
  filteredBlogs: [],
  blog: {},
  loading: true,
  error: {},
  start: 0,
  size: 3,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.GET_BLOGS:
      return {
        ...state,
        blogs: payload,
        loading: false,
        start: state.start + state.size,
      };

    case TYPES.GET_MORE_BLOGS:
      return {
        ...state,
        blogs: state.blogs.concat(payload),
        loading: false,
        start: state.start + state.size,
      };

    case TYPES.GET_SEARCH:
      return {
        ...state,
        filteredBlogs: payload,
        loading: false,
      };

    case TYPES.GET_BLOG:
      return {
        ...state,
        blog: payload,
        loading: false,
      };

    case TYPES.BLOG_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case TYPES.UPDATE_LIKES:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === payload.id ? { ...blog, likes: payload.likes } : blog
        ),
        loading: false,
      };

    case TYPES.DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== payload),
        loading: false,
      };

    // case TYPES.ADD_BLOG:
    //   return {
    //     ...state,
    //     blogs: [payload, ...state.blogs],
    //     loading: false,
    //   };

    case TYPES.ADD_COMMENT:
      return {
        ...state,
        blog: { ...state.blog, comments: payload },
        loading: false,
      };

    case TYPES.REMOVE_COMMENT:
      return {
        ...state,
        blog: {
          ...state.blog,
          comments: state.blog.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };

    default:
      return state;
  }
}
