import React from "react";
import { connect } from "react-redux";

import { Container, View } from "native-base";
import { Text, Image } from "react-native";

import PostCard from "./PostCard";
import SwiperComponent from "./SwiperComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostDetail = ({ explore, route, navigation }) => {
  const { feed } = route.params;

  const post = explore.find((post) => post.id === feed.id);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "90%",
        }}
      >
        <View style={{ width: "10%", paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: feed.photos[0].image }}
              style={{ marginVertical: 40 }}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={{ uri: feed.photos[0].image }} />
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={{ uri: feed.photos[0].image }} />
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={{ uri: feed.photos[0].image }} />
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={{ uri: feed.photos[0].image }} />
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <SwiperComponent />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#62636a",
          }}
        >
          Angelica
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00a46c",
            paddingLeft: 170,
            fontSize: 20,
          }}
        >
          $400
        </Text>
      </View>

      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          color: "#b1e5d3",
          paddingTop: 3,
          fontSize: 20,
        }}
      >
        Russia
      </Text>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "50%",
            backgroundColor: "#00a46c",
            height: 70,
            marginTop: 20,
            borderTopRightRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 17,
            }}
          >
            Buy Now
          </Text>
        </View>

        <View
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#62636a",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Description
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  explore: state.feedsReducer.explore,
});

export default connect(mapStateToProps)(PostDetail);

{
  /* <PostCard
navigation={navigation}
key={post.id}
post={post}
isLiked={feed.liked}
r={feed.id}
/> */
}
