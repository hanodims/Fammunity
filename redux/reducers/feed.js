import { SET_FEED, ADD_FEED, SET_EXPLORE } from "../actions/types";

const initialState = {
  feeds: [],
  explore: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FEED:
      const feeds = payload;
      return {
        ...state,
        feeds: feeds,
      };

    case SET_EXPLORE:
      const explore = payload;
      return {
        ...state,
        explore: explore,
      };
    case ADD_FEED:
      const post = payload;

      return {
        ...state,
        explore: state.explore.concat(post),
      };

    default:
      return state;
  }
};

export default reducer;
