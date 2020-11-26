import { Alert } from "react-native";

import {  SET_COMMENT, ADD_COMMENT} from "./types";
import instance from "./instance";


export const fetchComments = (post_id) => async (dispatch) => {
    try {
      const res = await instance.get(`/comments/`, post_id);
      const comments = res.data;
      dispatch({
        type: SET_COMMENT,
        payload: comments,
      });
      
    } catch (err) {
      console.error("wrong comments List fetching", err);
    }
  };


export const addComment = (comment) => async (dispatch) => {
  try {
    const res = await instance.post('/comment/', comment);
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