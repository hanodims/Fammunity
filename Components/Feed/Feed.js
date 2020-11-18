import React from "react";
import { connect } from "react-redux";

//style
import { Container, Text } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

const Feed = ({ feeds }) => {
  console.log(`${feeds}`);
  function feedsList({ post }) {
    return <Text>hi</Text>;
  }

  return (
    <Container style={styles.FeedDev}>
      <Text>HI, YOU CAN SEE ME</Text>
      <FlatList
        data={feeds}
        numColumns={3}
        renderItem={feedsList}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
});

export default connect(mapStateToProps)(Feed);
