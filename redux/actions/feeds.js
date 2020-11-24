import instance from "./instance";
import { SET_FEED } from "./types";

export const fetchFeeds = () => async (dispatch) => {
  try {
    const res = await instance.get("/explore/");
    const feeds = res.data;
    dispatch({
      type: SET_FEED,
      payload: feeds,
    });
  } catch (err) {
    console.error("wrong explore List fetching", err);
  }
};
