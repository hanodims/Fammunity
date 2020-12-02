import React from "react";

//style
import { View, Text, Image } from 'react-native'
import {  Card,ListItem, Button, Icon } from 'react-native-elements'


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

