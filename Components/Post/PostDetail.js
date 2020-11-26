import React from "react";
import { connect } from "react-redux";

import { Container } from "native-base";

import PostCard from "./PostCard";

const PostDetail = ({ explore, route, navigation }) => {
  const { feed } = route.params;

  const post = explore.find((post) => post.id === feed.id);

  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <PostCard navigation={navigation} key={feed.id} post={post} r={feed.id}/>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  explore: state.feedsReducer.explore,
});

export default connect(mapStateToProps)(PostDetail);
