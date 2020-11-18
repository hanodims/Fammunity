import React from "react";
import { connect } from "react-redux";

//style
import { Container, Content, Text, View } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

const Feed = ({ feeds }) => {
  function feedsList({ item }) {
    console.log(`${item.description}`);
    return <Text>{item.description}</Text>;
  }

  return (
    <Container>
      <Container style={styles.FeedDev}>
        <Container></Container>
        <FlatList
          data={feeds}
          numColumns={3}
          renderItem={feedsList}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
});

export default connect(mapStateToProps)(Feed);
