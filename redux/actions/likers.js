import instance from "./instance";
import { SET_LIKERS } from "./types";

export const fetchLikers = (post_id) => async (dispatch) => {
  try {
    const res = await instance.get(`/likers/` + post_id);
    const likers = res.data;
    dispatch({
      type: SET_LIKERS,
      payload: likers,
    });
  } catch (err) {
    console.error("wrong likers List fetching", err);
  }
};

export const likePost = (post_id) => async (dispatch) => {
  try {
    await instance.post(`/like/`, post_id);
  } catch (error) {
    Alert.alert("Failed");
  }
};
