import React from "react";
import { connect } from "react-redux";

import { Container, View } from "native-base";
import { Text, Image } from "react-native";

import PostCard from "./PostCard";
import SwiperComponent from "./SwiperComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostDetail = ({ explore, route, navigation }) => {
  const { feed } = route.params;

  const post = explore.find((post) => post.id === feed.id);

  return <Container></Container>;
};

const mapStateToProps = (state) => ({
  explore: state.feedsReducer.explore,
});

export default connect(mapStateToProps)(PostDetail);

{
  /* <PostCard
navigation={navigation}
key={post.id}
post={post}
isLiked={feed.liked}
r={feed.id}
/> */
}
