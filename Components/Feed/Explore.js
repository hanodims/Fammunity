import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";
import { logout } from "../../redux/actions";
import { Ionicons } from "@expo/vector-icons";
//style
import { Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const Explore = ({ explore, navigation, logout }) => {
  return (
    <Container style={styles.container}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>FAMMUNITY</Text>
        <Ionicons
              name="md-log-out"
              size={24}
              color="red"
              onPress={logout}
            ></Ionicons>
      </View>
      <FeedList feeds={explore} navigation={navigation} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  explore: state.feedsReducer.explore,
});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
