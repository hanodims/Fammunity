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
            fontSize: 15,
            letterSpacing: 1,
            fontWeight: "bold",
            color: "#5A0016",
            textAlign: "center",
            width: 120,
            height: 20,
            marginTop: 11,
            alignSelf: "center",
            marginHorizontal: 4,
          }}
        >
          {item.brand.name}
        </Text>
        {/* <Image
          source={{ uri: item.brand.image }}
          style={{
            width: 73,
            height: 65,
            alignSelf: "stretch",
          }}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default PostItems;
