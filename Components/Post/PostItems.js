import React, { useState } from "react";
import { connect } from "react-redux";

import { Card, CardItem, Text, Left, Body, View } from "native-base";

const PostItems = ({ item }) => {
  return (
    <View key={item.id}>
      <Card style={{}}>
        <CardItem>
          <Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>SR {item.price}</Text>
              <Text note>{item.brand}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Text>next</Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default PostItems;
