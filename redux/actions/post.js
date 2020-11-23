import { Alert } from "react-native";

import { RESET, ADD_ITEM, ADD_PHOTO, ADD_FEED } from "./types";
import instance from "./instance";

export const addItem = (item) => {
  //console.log("trying to add item", item);
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const addImage = (image) => {
  //console.log("trying to add image", image);
  return {
    type: ADD_PHOTO,
    payload: image,
  };
};

export const likePost = (post_id) => async () => {
  try {
    await instance.post(`/like/`, post_id);
  } catch (error) {
    Alert.alert("Failed");
  }
};

export const addPost = (item) => async (dispatch) => {
  try {
    let formData = new FormData();
    let items = item.items;
    let itemsCounter = 0;
    items.map((item) => {
      formData.append("name" + itemsCounter, item.name);
      formData.append("price" + itemsCounter, item.price);
      formData.append("brand" + itemsCounter, item.brand);
      itemsCounter++;
    });
    formData.append("itemsCounter", itemsCounter);

    formData.append("description", item.description);

    // console.log("item.photos", item.photos);
    let photos = item.photos;
    let counter = 0;
    photos.map((photo) => {
      formData.append("photo" + counter, photo);
      counter++;
    });
    // console.log("counter", counter);
    formData.append("counter", counter);

    // console.log("trying to add", formData);

    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await instance.post(`/post/`, formData, config);
    const feed = res.data;
    console.log("feed.res", feed);
    dispatch({ type: RESET });
    dispatch({
      type: ADD_FEED,
      payload: feed,
    });
    Alert.alert("Done");
  } catch (error) {
    //console.error("no adding",);
    Alert.alert("Failed");
  }
};
