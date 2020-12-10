import React from "react";
import { connect } from "react-redux";

//style
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native-gesture-handler";
import { POST_DETAIL } from "../../Navigation/screenNames";
import { Container } from "native-base";

const Feed = ({ feeds, navigation}) => {
  function feedsList({ item }) {
    return (
      <View style={styles.postContainer}>
        <View style={styles.button1Stack}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.push(POST_DETAIL, { feed: item })}
          >
            <ImageBackground
              source={{ uri: item.photos[0].image }}
              style={styles.button1}
            >
              <Icon
                name="heart"
                color="tomato"
                size={22}
                style={styles.button2}
              />
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.rect7}>
            <View style={styles.rect4}>
              <Text style={styles.loremIpsum}>{item.owner.user.username}</Text>

              <Text
                style={{
                  marginTop: 0,
                  fontFamily: "Cochin",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {item.likers_number}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <Container style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={feeds}
        numColumns={2}
        renderItem={feedsList}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    width: 166,
    height: 214,
    margin: 5,
  },
  button1: {
    top: 0,
    left: 0,
    width: 166,
    height: 213,
    position: "absolute",
    backgroundColor: "#E6E6E6",
  },
  button2: {
    width: 33,
    height: 25,
    marginTop: 165,
    marginLeft: 123,
    alignSelf: "center",
  },
  rect7: {
    top: 186,
    left: 0,
    width: 165,
    height: 28,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  rect4: {
    flexDirection: "row",
    width: 140,
    height: 22,
    justifyContent: "space-between",
    marginLeft: 6,
  },
  loremIpsum: {
    fontFamily: "Cochin",
    color: "white",
    height: 22,
    width: 100,
    textAlign: "left",
    fontSize: 16,
    alignSelf: "flex-start",
  },
  button1Stack: {
    width: 166,
    height: 214,
    marginLeft: 1,
  },
});
const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
  explore: state.feedsReducer.explore,
  profile: state.profileReducer.userProfile,
});
export default connect(mapStateToProps)(Feed);
