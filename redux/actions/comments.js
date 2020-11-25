import { Alert } from "react-native";

import {  SET_COMMENT, ADD_COMMENT} from "./types";
import instance from "./instance";


export const fetchComments = (post_id) => async (dispatch) => {
    try {
    await instance.get(`/comments/`, post_id);
    } catch (err) {
      console.error("wrong comments List fetching", err);
    }
  };


export const addComment = (comment, post_id) => async (dispatch) => {
  try {
    const txt = { comment };
    const res = await instance.post('comment', post_id,txt);
    const newComment = res.data;
    dispatch({
      type: ADD_COMMENT,
      payload: newComment,
    });
    Alert.alert("Done");
  } catch (error) {
    console.error("no adding", error);
    Alert.alert("Failed");
  }
};