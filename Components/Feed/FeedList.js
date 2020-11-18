import React from "react";
import { connect } from "react-redux";

//components
import FeedItem from "./FeedItem";

//style
import { Container } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

const FeedList = ({ feeds }) => {
  function feedsList({ item }) {
    console.log(`${item.description}`);
    return <FeedItem post={item} likes={false} />;
  }

  return (
    <Container>
      <Container style={styles.FeedDev}>
        <FlatList
          data={feeds}
          numColumns={3}
          renderItem={feedsList}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
});

export default connect(mapStateToProps)(FeedList);
