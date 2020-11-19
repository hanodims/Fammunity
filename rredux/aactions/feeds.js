import { SET_FEED } from "./types";
import { data } from "./data";

export const fetchFeeds = () => {
  const feeds = data;
  return {
    type: SET_FEED,
    payload: feeds,
  };
};
