import TYPES from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SET_ALERT:
      return [...state, payload];
    case TYPES.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
