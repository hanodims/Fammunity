import React, { useState } from "react";
import { connect } from "react-redux";

import { View } from "native-base";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostItems = ({ item, handelPress }) => {
  //console.log("im working", item.brand.id);

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
          {item.brand.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostItems;
