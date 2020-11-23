import { combineReducers } from "redux";

// Reducers
import feedsReducer from "./feed";
import postReducer from "./post";
import likersReducer from "./likers";
import user from "./user";

const rootReducer = combineReducers({
  feedsReducer,
  postReducer,
  likersReducer,
  user,

});

export default rootReducer;
