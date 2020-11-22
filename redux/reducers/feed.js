import { SET_FEED } from "../actions/types";

const initialState = {
  feeds: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FEED:
      console.log("feeds reduser", payload);
      const feeds = payload;

      return {
        ...state,
        feeds: feeds,
      };

    default:
      return state;
  }
};

export default reducer;
Redux devtools 