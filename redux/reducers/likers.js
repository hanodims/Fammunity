import { SET_LIKERS, LIKE_POST } from "../actions/types";
const initialState = {
  likers: [],
  like: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKERS:
      return {
        ...state,
        likers: action.payload,
      };
    case LIKE_POST:
      return {
        ...state,
        like: !state.like,
      };
    default:
      return state;
  }
};
