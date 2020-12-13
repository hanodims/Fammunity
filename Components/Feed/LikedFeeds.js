import React, { useEffect } from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";
import { fetchExplore } from "../../redux/actions";

const LikedFeeds = ({ explore, navigation }) => {
  const likedFeeds = explore?.filter((feed) => feed.liked == true);
  console.log("likedFeeds", likedFeeds);
  return (
    <Container style={styles.container}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Liked Posts</Text>
      </View>

      <FeedList feeds={likedFeeds} navigation={navigation} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  explore: state.feedsReducer.explore,
});
export default connect(mapStateToProps)(LikedFeeds);
