import {
  ADD_ITEM,
  ADD_PHOTO,
  RESET,
  REMOVE_PHOTO,
  REMOVE_ITEM,
} from "../actions/types";

const initialState = {
  items: [],
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // console.log("items red: ", state.items);
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    case REMOVE_ITEM:
      // console.log("photos red", state.photos);
      return {
        ...state,
        items: state.items.filter((item) => item != action.payload),
      };
    case ADD_PHOTO:
      // console.log("photos red", state.photos);
      return {
        ...state,
        photos: state.photos.concat(action.payload),
      };
    case REMOVE_PHOTO:
      // console.log("photos red", state.photos);
      return {
        ...state,
        photos: state.photos.filter((photo) => photo != action.payload),
      };
    case RESET:
      // console.log("RESET red", state);
      return initialState;
    default:
      return state;
  }
};
