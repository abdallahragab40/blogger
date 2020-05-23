import axios from "axios";
import TYPES from "../actions/types";
import { setAlert } from "./alert";

// Get Current user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/profile/me");
    dispatch({
      type: TYPES.GET_PROFILE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get All profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({
    type: TYPES.CLEAR_PROFILE,
  });
  try {
    const { data } = await axios.get("/api/profile");
    dispatch({
      type: TYPES.GET_PROFILES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get Profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/profile/user/${userId}`);
    dispatch({
      type: TYPES.GET_PROFILE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/profile", formData, config);
    dispatch({
      type: TYPES.GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: TYPES.PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Account & Profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await axios.delete("/api/profile");
      dispatch({
        type: TYPES.CLEAR_PROFILE,
      });
      dispatch({
        type: TYPES.DELETE_ACCOUNT,
      });

      dispatch(setAlert("Your account has been permently deleted", "success"));
    } catch (err) {
      dispatch({
        type: TYPES.PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
