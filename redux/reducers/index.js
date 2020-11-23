import { combineReducers } from "redux";
import user from "./user";
// Reducers
import feedsReducer from "./feed";
import postReducer from "./post";

const rootReducer = combineReducers({
  feedsReducer,
  postReducer,
  user,
});

export default rootReducer;
