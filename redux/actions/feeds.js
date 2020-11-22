import instance from "./instance";
import { SET_FEED } from "./types";
import { data } from "./data";

// export const fetchFeeds = () => {
//   const feeds = data;
//   return {
//     type: SET_FEED,
//     payload: feeds,
//   };
// };

export const fetchFeeds = () => async (dispatch) => {
  try {
    const res = await instance.get("/posts/");
    const feeds = res.data;
    dispatch({
      type: SET_FEED,
      payload: feeds,
    });
  } catch (err) {
    console.error("wrong posts List fetching", err);
  }
};
