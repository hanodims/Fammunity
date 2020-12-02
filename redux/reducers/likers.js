import { SET_LIKERS, ADD_LIKE } from "../actions/types";
const initialState = {
  likers: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKERS:
      //console.log("likers red", state.likers);
      return {
        ...state,
        likers: action.payload,
      };
    case ADD_LIKE:
      //console.log("likers added", state.likers);
      return {
        ...state,
        likers: state.likers.liked_by.concat(action.payload),
      };

    default:
      return state;
  }
};
