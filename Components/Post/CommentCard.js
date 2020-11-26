import React from "react";

//style
import { Image , Text} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

const CommentCard = ({ comment }) => {
  return (
      <Text>{comment}</Text>
  )
};

export default CommentCard;