import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const Feed = ({ feeds, navigation }) => {
  return (
    <Container style={styles.FeedDev}>
      {feeds.length > 0 ? (
        <View style={styles.FeedDev}>
          <View style={{ paddingBottom: 30 }}>
            <Text style={styles.feedTitle}>FEED</Text>
          </View>
          <FeedList feeds={feeds} navigation={navigation} />
        </View>
      ) : (
        <Text style={styles.feedTitle}>Follow Some People</Text>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
});
export default connect(mapStateToProps)(Feed);
