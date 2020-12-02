import { Alert } from "react-native";
import instance from "./instance";
import { SET_LIKERS, ADD_LIKE } from "./types";

export const fetchLikers = (post_id) => async (dispatch) => {
  try {
    const res = await instance.get(`/likers/` + post_id);
    const likers = res.data;
    //console.log("likers", likers);

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
    const allLikers = await instance.post(`/like/`, post_id);
    //console.log("allLikers", allLikers.data);
    if (allLikers.data.liked) {
      dispatch({
        type: ADD_LIKE,
        payload: allLikers.data.liker,
      });
    }
  } catch (error) {
    console.log("err like post", error);
  }
};
