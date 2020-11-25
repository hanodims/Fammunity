import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const Explore = ({ feeds, navigation }) => {
  //console.log("feeds", feeds);
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>FAMMUNITY</Text>
      </View>
      <FeedList feeds={feeds} navigation={navigation} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
});
export default connect(mapStateToProps)(Explore);
