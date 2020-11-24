import { SET_FEED, ADD_FEED } from "../actions/types";

const initialState = {
  feeds: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FEED:
      // console.log("feeds reduser", payload);
      const feeds = payload;

      return {
        ...state,
        feeds: feeds,
      };
    case ADD_FEED:
      // console.log("feeds reduser", payload);
      const feed = payload;

      return {
        ...state,
        feeds: state.feeds.concat(feed),
      };

    default:
      return state;
  }
};

export default reducer;
