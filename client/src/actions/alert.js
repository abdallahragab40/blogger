import TYPES from "./types";
import { v4 as uuid } from "uuid";

export const setAlert = (msg, alertType, timeout = 3000) => {
  return (dispatch) => {
    const id = uuid();
    dispatch({
      type: TYPES.SET_ALERT,
      payload: { msg, alertType, id },
    });
    setTimeout(
      () => dispatch({ type: TYPES.REMOVE_ALERT, payload: id }),
      timeout
    );
  };
};
