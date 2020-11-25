import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const Feed = ({ feeds, navigation, following }) => {
  let userFeeds = [];
  for (var i = 0; i < following.length; i++) {
    userFeeds.push(following[i].user_to);
  }
  const explore = feeds.filter((feed) => userFeeds.includes(feed.owner));

  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>FEED</Text>
      </View>
      <FeedList feeds={explore} navigation={navigation} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
  following: state.profileReducer.profile.following,
});
export default connect(mapStateToProps)(Feed);
