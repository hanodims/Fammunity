import { Card } from "native-base";
import React from "react";

//style
import { Image, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const CommentCard = ({ comment }) => {
  //console.log("card ,item", comment.txt);
  return (
    <Card>
      <Text>{comment.txt}</Text>
      <Text>{comment.commenter}</Text>
    </Card>
  );
};

export default CommentCard;
