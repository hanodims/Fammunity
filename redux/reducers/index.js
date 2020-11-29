import { combineReducers } from "redux";

// Reducers
import feedsReducer from "./feed";
import postReducer from "./post";
import likersReducer from "./likers";
import user from "./user";
import profileReducer from "./profile";
import commentsReducer from "./comments";


const rootReducer = combineReducers({
  feedsReducer,
  postReducer,
  likersReducer,
  user,
  profileReducer,
  commentsReducer,
});

export default rootReducer;
