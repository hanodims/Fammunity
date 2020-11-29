import { SET_CURRENT_USER } from "../actions/types";

// export default (user = null, action) => {
//   switch (action.type) {
//     case SET_CURRENT_USER:
//       return action.payload;
//     default:
//       return user;
//   }
// };

const reducer = (state = null, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return payload;
    default:
      return state;
  }
};

export default reducer;
