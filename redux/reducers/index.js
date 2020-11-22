import { combineReducers } from "redux";

// Reducers
import feedsReducer from "./feed";
import postReducer from "./post";

const rootReducer = combineReducers({
  feedsReducer,
  postReducer,
});

export default rootReducer;
