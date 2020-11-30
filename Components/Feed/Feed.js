import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

//style
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { POST_DETAIL } from "../../Navigation/screenNames";

const Feed = ({ feeds, navigation, explore, profile }) => {
  function feedsList({ item }) {
    console.log("profile.image ", item);
    return (
      <View style={styles.rect2}>
        <TouchableOpacity
          onPress={() => navigation.push(POST_DETAIL, { feed: item })}
          style={styles.button1}
        >
          <Image
            source={{ uri: item.photos[0].image }}

            style={{
              width: 164,
              height: 213,
              marginRight: 2,
            }}

          />
        </TouchableOpacity>
        <View style={styles.rect7}>
          <View style={styles.rect6Row}>
            <View style={styles.rect6}>
              <Image
                source={{ uri: item.owner.image }}
                style={{ width: 36, height: 35, borderRadius: 20 }}
              />
            </View>

            <View style={styles.rect4}>
              <Text style={{ fontSize: 16, fontFamily: "Arial" }}>
                {item.owner.user.username}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <FlatList
          data={explore}
          numColumns={2}
          renderItem={feedsList}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "white",
  },
  rect: {
    width: 375,
    height: 735,
    marginTop: 0,
  },
  rect2: {
    width: 166,
    height: 264,
    opacity: 1,
    marginTop: 20,
    marginLeft: 12,
  },
  button1: {
    width: 166,
    height: 213,
    justifyContent: "center",
    alignItems: "center",
  },
  rect7: {
    width: 166,
    height: 50,
    //backgroundColor: "rgba(248,231,28,0.32)",
    marginTop: 1,
    marginLeft: 1,
  },
  rect6: {
    width: 36,
    height: 35,
    //backgroundColor: "#E6E6E6",
    borderRadius: 20,
  },
  rect4: {
    width: 107,
    height: 17,
    alignSelf: "center",
    paddingLeft: 8,
  },

  rect4Column: {
    width: 107,
    marginLeft: 4,
    marginTop: 2,
  },
  rect6Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 13,
  },
});

const mapStateToProps = (state) => ({
  feeds: state.feedsReducer.feeds,
  explore: state.feedsReducer.explore,
  profile: state.profileReducer.userProfile,
});
export default connect(mapStateToProps)(Feed);

{
  /* <Container
      style={{
        alignItems: "center",
        flex: 1,
        paddingTop: 30,
      }}
    >
      {feeds.length > 0 ? (
        <View style={styles.FeedDev}>
          <View style={{ paddingBottom: 30 }}>
            <Text style={styles.feedTitle}>FEED</Text>
          </View>
          <FeedList feeds={feeds} navigation={navigation} />
        </View>
      ) : (
        <Text style={styles.feedTitle}>Follow Some People</Text>
      )}
    </Container> */
}
