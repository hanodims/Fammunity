import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

//style
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Feed = ({ feeds, navigation }) => {
  function feedsList({ item }) {
    console.log("item", item);
    return (
      <View style={styles.rect2}>
        <TouchableOpacity style={styles.button1}>
          <Image
            source={{ uri: item.photos.image }}
            style={{ width: 166, height: 213, marginLeft: 1 }}
          />
        </TouchableOpacity>
        <View style={styles.rect7}>
          <View style={styles.rect6Row}>
            <View style={styles.rect6}>
              <Text>HI</Text>
            </View>
            <View style={styles.rect4Column}>
              <View style={styles.rect4}>
                <Text>HI</Text>
              </View>
              <View style={styles.rect5}>
                <Text>HI</Text>
              </View>
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
          data={feeds}
          numColumns={3}
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
  },
  rect: {
    width: 375,
    height: 735,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 48,
  },
  rect2: {
    width: 166,
    height: 264,
    backgroundColor: "rgba(241,233,233,1)",
    marginTop: 45,
    marginLeft: 12,
  },
  button1: {
    width: 166,
    height: 213,
    backgroundColor: "#E6E6E6",
    marginLeft: 1,
  },
  rect7: {
    width: 165,
    height: 50,
    backgroundColor: "rgba(248,231,28,0.32)",
    marginTop: 1,
    marginLeft: 1,
  },
  rect6: {
    width: 36,
    height: 35,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
  },
  rect4: {
    width: 107,
    height: 17,
    backgroundColor: "#E6E6E6",
  },
  rect5: {
    width: 107,
    height: 17,
    backgroundColor: "#E6E6E6",
    marginTop: 1,
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
