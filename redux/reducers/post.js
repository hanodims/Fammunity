const initialState = {
  items: [],
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      console.log("tred", state.items);
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    case "SET_PHOTOS":
      console.log("photos red", state.photos);
      return {
        ...state,
        photos: state.photos.concat(action.payload),
      };
    default:
      return state;
  }
};
