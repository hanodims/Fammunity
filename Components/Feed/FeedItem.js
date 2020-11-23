import React from "react";

//screens
import { POST_DETAIL } from "../../Navigation/screenNames";

//style
import { Alert, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const FeedItem = ({ post, navigation }) => {
  //console.log("post", `${post.id}`);
  // console.log("photos", `${post.photos}`);
  // console.log(`${post.photos[0]["image"]}`);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(POST_DETAIL, { feed: post })}
    >
      {post.photos != null ? (
        <Image
          style={styles.feedListImage}
          source={{ uri: post.photos[0].image }}
        />
      ) : (
        <Image
          style={styles.feedListImage}
          source={{
            uri:
              "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2019/08/FullMoon.jpg?mw=600",
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default FeedItem;
