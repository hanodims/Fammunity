import { combineReducers } from "redux";

// Reducers
import feedsReducer from "./feed";

const rootReducer = combineReducers({
  feedsReducer,
});

export default rootReducer;
