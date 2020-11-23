import { combineReducers } from "redux";

// Reducers
import feedsReducer from "./feed";
import postReducer from "./post";
import likersReducer from "./likers";
import user from "./user";
import profile from "./profile";

const rootReducer = combineReducers({
  feedsReducer,
  postReducer,
  likersReducer,
  user,
  profile,
});

export default rootReducer;
