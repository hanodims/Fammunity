import { SET_COMMENT, ADD_COMMENT } from "../actions/types";
const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT:
      //console.log("likers red", state.likers);
      return {
        ...state,
        comments: action.payload,
      };

      case ADD_COMMENT:
      const newComment = payload;
      return {
        ...state,
        comments: [...state.comments, newComment],
      };

    default:
      return state;
  }
};
