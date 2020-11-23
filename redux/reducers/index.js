import { combineReducers } from "redux";

// Reducers
import feedsReducer from "./feed";
import postReducer from "./post";
import likersReducer from "./likers";

const rootReducer = combineReducers({
  feedsReducer,
  postReducer,
  likersReducer,
});

export default rootReducer;
