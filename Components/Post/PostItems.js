import React from "react";

import { View } from "native-base";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostItems = ({ item, handelPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => handelPress(item.name, item.price, item.brand.name)}
      >
        <Text
          style={{
            fontFamily: "Cochin",
            fontSize: 20,
            letterSpacing: 1,
            fontWeight: "bold",
            color: "#5A0016",
            textAlign: "left",
            marginTop: 5,
            marginEnd: 20,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostItems;
