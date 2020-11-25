import React from "react";

//components
import FeedItem from "./FeedItem";

//style
import { Container } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

const FeedList = ({ feeds, navigation }) => {
  function feedsList({ item }) {
    return <FeedItem post={item} navigation={navigation} />;
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

export default FeedList;
