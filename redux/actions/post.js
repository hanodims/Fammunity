import { SET_ITEMS, SET_PHOTOS } from "./types";
import instance from "./instance";
import { Alert } from "react-native";

export const addItem = (item) => {
  //console.log("trying to add", item);
  return {
    type: SET_ITEMS,
    payload: item,
  };
};

export const addImage = (image) => {
  //console.log("trying to add", image);
  return {
    type: SET_PHOTOS,
    payload: image,
  };
};
//working => send post with items
// export const addPost = (item) => async (dispatch) => {
//   try {
//     console.log("try to add post", item);
//     const res = await instance.post("/post/", item);
//     //const post = res.data;
//     Alert.alert("Done");
//     // dispatch({
//     //   type: SET_POST,
//     //   payload: post,
//     // });
//   } catch (error) {
//     //console.error("no adding", error.res.data);
//     Alert.alert("Failed");
//   }
// };
export const addPost = (item) => async (dispatch) => {
  try {
    let formData = new FormData();
    let items = item.items;
    let itemsCounter = 0;
    let photos = item.photos;
    let counter = 0;
    // Adding form items for each image
    items.map((item) => {
      Object.keys(item).forEach((key) => {
        formData.append(key + itemsCounter, item[key]);
      });
      itemsCounter++;
    });
    formData.append("itemsCounter", itemsCounter);
    formData.append("description", item.description);

    photos.map((photo) => {
      formData.append("photo" + counter, photo);
      counter++;
    });

    formData.append("counter", counter);

    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    await instance.post(`/post/`, formData, config);
  } catch (error) {
    //console.error("no adding",);
    Alert.alert("Failed");
  }
};

// formData.append("photos", {
//   name: "3FC69516-9EEF-48B7-ABC9-4D504D56DCC7.jpg",
//   type: "image/jpg",
//   uri:
//     "/Users/hanodia/Library/Developer/CoreSimulator/Devices/17C8BCFD-BC89-412B-92E4-33DEB30AE458/data/Containers/Data/Application/67B2284C-BCC8-43AF-AEDC-F5490FD6031C/Library/Caches/ExponentExperienceData/%2540hend_mohammed%252FFammunity/ImagePicker/3FC69516-9EEF-48B7-ABC9-4D504D56DCC7.jpg",
// });

// formData.append("name", "rr");
// formData.append("price", 44);
// formData.append("size", 44);
// formData.append("brand", 1);
