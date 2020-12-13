import React from "react";

//style
import { Text } from "react-native";
import { Card } from "react-native-elements";

const CommentCard = ({ comment }) => {
  return (
    <Card>
      <Text>{comment.txt}</Text>
      <Text>{comment.commenter}</Text>
    </Card>
  );
};

export default CommentCard;
