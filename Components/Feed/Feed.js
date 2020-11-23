import React from "react";

//components
import FeedsList from "./FeedList";

//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const Feed = ({ navigation }) => {
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Fammunity</Text>
      </View>
      <FeedsList navigation={navigation} />
    </Container>
  );
};

export default Feed;
