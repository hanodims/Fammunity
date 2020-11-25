import React from "react";

//screens
import { POST_DETAIL } from "../../Navigation/screenNames";

//style
import { Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const FeedItem = ({ post, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push(POST_DETAIL, { feed: post })}
    >
      {post.photos && (
        <Image
          style={styles.feedListImage}
          source={{ uri: post.photos[0].image }}
        />
      )}
    </TouchableOpacity>
  );
};

export default FeedItem;
