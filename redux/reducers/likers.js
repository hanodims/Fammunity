const initialState = {
  likers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIKERS":
      return {
        ...state,
        likers: action.payload,
      };
    default:
      return state;
  }
};
