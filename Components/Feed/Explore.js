import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const Explore = ({ explore, navigation }) => {
  return (
    <Container style={styles.container}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>FAMMUNITY</Text>
      </View>
      <FeedList feeds={explore} navigation={navigation} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  explore: state.feedsReducer.explore,
});
export default connect(mapStateToProps)(Explore);
