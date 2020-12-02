import React from "react";
import { connect } from "react-redux";

//components
import FeedList from "./FeedList";

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

const Feed = ({ feeds, navigation, explore, profile }) => {
  function feedsList({ item }) {
    //console.log("profile.image ", item);
    //if (item.id != 11 && item.id != 19)
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
    //fontWeight: "bold",
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

//function feedsList({ item }) {
//   console.log("profile.image ", item);
// if (item.id != 14 && item.id != 15)
// return (
//   <View style={styles.rect2}>
//     <TouchableOpacity
//       onPress={() => navigation.push(POST_DETAIL, { feed: item })}
//       style={styles.button1}
//     >
//       <Image
//         source={{ uri: item.photos[0].image }}
//         style={{
//           width: 164,
//           height: 213,
//           marginRight: 2,
//         }}
//       />
//     </TouchableOpacity>
//     <View style={styles.rect7}>
//       <View style={styles.rect6Row}>
//         <View style={styles.rect6}>
//           <Image
//             source={{ uri: item.owner.image }}
//             style={{ width: 36, height: 40, borderRadius: 20 }}
//           />
//         </View>

//         <View style={styles.rect4}>
//           <Text style={{ fontSize: 16, fontFamily: "Arial" }}>
//             {item.owner.user.username}
//           </Text>
//         </View>
//       </View>
//     </View>
//   </View>
// );
// }
// return (
// <View style={styles.container}>
// <View style={styles.rect}>
//   <FlatList
//     data={explore}
//     numColumns={2}
//     renderItem={feedsList}
//     keyExtractor={(item) => item.id}
//   />
// </View>
// </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
// flex: 1,
// alignSelf: "center",
// backgroundColor: "white",
// },
// rect: {
// width: 375,
// height: 735,
// marginTop: 0,
// },
// rect2: {
// width: 166,
// height: 264,
// opacity: 1,
// marginTop: 20,
// marginLeft: 12,
// },
// button1: {
// width: 166,
// height: 213,
// justifyContent: "center",
// alignItems: "center",
// },
// rect7: {
// width: 166,
// height: 50,
// marginTop: 1,
// marginLeft: 1,
// },
// rect6: {
// width: 36,
// height: 35,
// borderRadius: 20,
// },
// rect4: {
// width: 107,
// height: 17,
// alignSelf: "center",
// paddingLeft: 8,
// },

// rect4Column: {
// width: 107,
// marginLeft: 4,
// marginTop: 2,
// },
// rect6Row: {
// height: 37,
// flexDirection: "row",
// marginTop: 5,
// marginLeft: 5,
// marginRight: 13,
// },
// });
