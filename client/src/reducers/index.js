import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import blog from "./blog";

export default combineReducers({ alert, auth, profile, blog });
