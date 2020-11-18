import React from "react";

//style
import { Alert, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const FeedItem = ({ post, likes }) => {
  console.log(`${post.description}`);

  return (
    <TouchableOpacity
      onPress={() => Alert.alert("You pressed me", `${post.description}`)}
    >
      <Image
        style={styles.feedListImage}
        source={require("../../assets/icon.png")}
      />
    </TouchableOpacity>
  );
};

export default FeedItem;
