import { Alert } from "react-native";

import { RESET, ADD_ITEM, ADD_PHOTO, ADD_FEED } from "./types";
import instance from "./instance";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const addImage = (image) => {
  return {
    type: ADD_PHOTO,
    payload: image,
  };
};

export const addPost = (item) => async (dispatch) => {
  try {
    let formData = new FormData();
    let items = item.items;
    let itemsCounter = 0;
    let photos = item.photos;
    let counter = 0;

    items.map((item) => {
      Object.keys(item).forEach((key) => {
        formData.append(key + itemsCounter, item[key]);
      });
      itemsCounter++;
    });

    photos.map((photo) => {
      formData.append("photo" + counter, photo);
      counter++;
    });

    formData.append("itemsCounter", itemsCounter);
    formData.append("description", item.description);
    formData.append("counter", counter);

    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await instance.post(`/post/`, formData, config);
    const feed = res.data;
    dispatch({ type: RESET });
    dispatch({
      type: ADD_FEED,
      payload: feed,
    });
    Alert.alert("Done");
  } catch (error) {
    console.error("no adding", error);
    Alert.alert("Failed");
  }
};
