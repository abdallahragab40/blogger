import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const inititalState = {};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
