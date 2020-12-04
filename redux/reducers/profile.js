import { SET_PROFILE, SET_USER_PROFILE } from "../actions/types";

const initialState = {
  profile: {},
  userProfile: {},
  name: "",
  loading: true
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROFILE:
      const profile = payload;
      return {
        ...state,
        profile: profile,
        name: profile.user,
        loading: false,
      };

    case SET_USER_PROFILE:
      const userProfile = payload;
      return {
        ...state,
        userProfile: userProfile,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
