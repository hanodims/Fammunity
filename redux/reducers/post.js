import { ADD_ITEM, ADD_PHOTO, RESET, REMOVE_PHOTO } from "../actions/types";

const initialState = {
  items: [],
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.payload),
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
      return {
        items: [],
        photos: [],
      };
    default:
      return state;
  }
};
