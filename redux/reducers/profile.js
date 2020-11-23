import { SET_PROFILE } from "../actions/types";

const initialState = {
  profile: {},
  name: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      const profile = payload;
      // console.log("payload red", payload);
      return {
        profile: profile,
        name: profile.user,
      };
    default:
      return state;
  }
};

export default reducer;
