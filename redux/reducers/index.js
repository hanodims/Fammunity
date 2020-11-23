import { combineReducers } from "redux";

// Reducers
import feedsReducer from "./feed";
import postReducer from "./post";
import profile from "./profile";
import user from "./user";

const rootReducer = combineReducers({
  feedsReducer,
  postReducer,
  user,
  profile,
});

export default rootReducer;
