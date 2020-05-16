import TYPES from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

// Load user

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const { data } = await axios.get("/api/auth");
    dispatch({
      type: TYPES.USER_LOADED,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.AUTH_ERROR,
    });
  }
};

// Register
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const { data } = await axios.post("/api/users", body, config);
    dispatch({
      type: TYPES.REGISTER_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TYPES.REGISTER_FAIL,
    });
  }
};

// Login
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const { data } = await axios.post("/api/auth", body, config);
    dispatch({
      type: TYPES.LOGIN_SUCCESS,
      payload: data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TYPES.LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: TYPES.CLEAR_PROFILE });
  dispatch({ type: TYPES.LOGOUT });
};
