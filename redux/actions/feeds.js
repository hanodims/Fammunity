import instance from "./instance";
import { SET_FEED, SET_EXPLORE } from "./types";

export const fetchExplore = () => async (dispatch) => {
  try {
    const res = await instance.get("/explore/");
    const feeds = res.data;
    dispatch({
      type: SET_EXPLORE,
      payload: feeds,
    });
  } catch (err) {
    console.error("wrong explore List fetching", err);
  }
};

export const fetchFeeds = () => async (dispatch) => {
  try {
    const res = await instance.get("/feeds/");
    const feeds = res.data;
    dispatch({
      type: SET_FEED,
      payload: feeds,
    });
  } catch (err) {
    console.error("wrong explore List fetching", err);
  }
};
