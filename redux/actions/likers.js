import { Alert } from "react-native";
import instance from "./instance";
import { SET_LIKERS, ADD_LIKE } from "./types";
import { fetchExplore } from "./feeds";

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
    console.log("allLikers.data.liked", allLikers.data.liked);
    console.log("allLikers.data.liker", allLikers.data.liker);
    console.log(post_id.post_id);
    if (allLikers.data.liked) {
      dispatch({
        type: ADD_LIKE,
        payload: allLikers.data.liker,
      });
      dispatch(fetchLikers(post_id.post_id));

      console.log("Done");
    } else dispatch(fetchLikers(post_id.post_id));
  } catch (error) {
    console.log("err like post", error);
  }
};
