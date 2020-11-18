import React from "react";
import { connect } from "react-redux";

//components
import FeedsList from "./FeedList";

//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const Feed = () => {
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Fammunity</Text>
      </View>
      <FeedsList />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
});

export default connect(mapStateToProps)(Feed);
