import { Alert } from "react-native";

import { SET_COMMENT, ADD_COMMENT } from "./types";
import instance from "./instance";

export const fetchComments = (post_id) => async (dispatch) => {
  try {
    const res = await instance.get(`/comments/` + post_id);
    const comments = res.data;
    // console.log(comments.comments);
    dispatch({
      type: SET_COMMENT,
      payload: comments.comments,
    });
  } catch (err) {
    console.error("wrong comments List fetching", err);
  }
};

export const addComment = (comment) => async (dispatch) => {
  try {
    const res = await instance.post("/comment/", comment);
    const newComment = res.data;
    const post_id = comment.post_id;
    // console.log(newComment);

    dispatch({
      type: ADD_COMMENT,
      payload: newComment,
    });
    dispatch(fetchComments(comment.post_id));
    // Alert.alert("Done");
  } catch (error) {
    console.error("no adding", error);
    //  Alert.alert("Failed");
  }
};
