import React from "react";

//style
import { Alert, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const FeedItem = ({ post, likes }) => {
  console.log("hi", `${post.description}`);
  console.log("photos", `${post.photos}`);
  console.log(`${post.photos[0]["image"]}`);

  return (
    <TouchableOpacity
      onPress={() => Alert.alert("You pressed me", `${post.description}`)}
    >
      <Image
        style={styles.feedListImage}
        source={{
          uri: post.photos
            ? post.photos[0].image
            : "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2019/08/FullMoon.jpg?mw=600",
        }}
      />
    </TouchableOpacity>
  );
};

export default FeedItem;
