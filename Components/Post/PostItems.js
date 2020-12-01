import React, { useState } from "react";
import { connect } from "react-redux";

import { Card, CardItem, Text, Left, Body, View } from "native-base";
import { Alert, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostItems = ({ item, handelPress }) => {
  console.log("im working", item);

  return (
    <View key={item.id}>
      <TouchableOpacity
        onPress={() => handelPress(item.name, item.price, item.brand.name)}
      >
        <Card style={{ marginVertical: 40, width: 50, height: 50 }}>
          <CardItem>
            <Image
              source={{ uri: item.brand.image }}
              style={{
                width: 30,
                height: 30,
                alignSelf: "stretch",
              }}
            />
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default PostItems;
{
  /* <Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>SR {item.price}</Text>
              <Text note>{item.brand}</Text>
            </Body>
          </Left> */
}
