import { INCREMENT, DECREMENT } from "./types";
import { combineReducers } from "redux";
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      state += 1;
      break;
    case DECREMENT:
      state -= 1;
      break;
    default:
      return state;
  }
  return state;
};

export const rootReducer = combineReducers({
  counterReducer,
});
