import React from "react";
import { Container, Text, View } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import FeedList from "../Feed/FeedList";


const PosterProfile = ({ post}) => {
  console.log(post);
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text>{post.owner}'s Profile</Text>
      </View>
      <FeedList feeds={profile.posts} navigation={navigation} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    post: state.profileReducer.name,
    user: state.user,
    feeds: state.feedsReducer.feeds,
  };
};


export default connect(mapStateToProps)(PosterProfile);
