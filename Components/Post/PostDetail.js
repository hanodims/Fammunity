import React from "react";
import { connect } from "react-redux";

import { Container, View } from "native-base";

import PostCard from "./PostCard";

const PostDetail = ({ feeds, route, navigation }) => {
  const { feed } = route.params;

  const post = feeds.find((post) => post.id === feed.id);

  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <PostCard navigation={navigation} key={post.id} post={post} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
});

export default connect(mapStateToProps)(PostDetail);
