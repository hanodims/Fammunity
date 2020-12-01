import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
  Container,
  Right,
  Button,
} from "native-base";
import { View, Text, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PostItems from "./PostItems";

import PostCard from "./PostCard";
import SwiperComponent from "./SwiperComponent";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  likePost,
  fetchLikers,
  fetchUserProfile,
  fetchComments,
  addComment,
  fetchExplore,
  fetchFeeds,
} from "../../redux/actions";

const PostDetail = ({ explore, route, navigation, profile }) => {
  const { feed } = route.params;
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    //console.log("im here");
    fetchExplore();
    fetchFeeds();
    fetchUserProfile(post.owner.id);
    fetchLikers(post.id);
    fetchComments(post.id);
  });

  function handelPress(n, p, b) {
    setBrand(b), setName(n), setPrice(p);
  }
  let handelUserProfile = () => {
    navigation.navigate(USER_PROFILE, { owner: post.owner_name, profile });
  };
  const post = explore.find((post) => post.id === feed.id);
  const itemsList = feed.items.map((item) => {
    return <PostItems key={item.id} item={item} handelPress={handelPress} />;
  });

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
        <View style={{ width: "18%", paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="black"
              style={{ marginVertical: 30 }}
            />
          </TouchableOpacity>
          <ScrollView>{itemsList}</ScrollView>
        </View>
        <View style={{ width: "90%" }}>
          <SwiperComponent post={post} />
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
            fontFamily: "Cochin",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00a46c",
            paddingLeft: 170,
            fontSize: 20,
          }}
        >
          {price}
        </Text>
      </View>

      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          color: "#b1e5d3",
          paddingTop: 3,
          fontSize: 20,
          fontFamily: "Cochin",
        }}
      >
        {brand}
      </Text>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "80%",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: 100,
            marginTop: 0,
            borderTopRightRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 17,
              fontFamily: "Cochin",
            }}
          >
            {post.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  explore: state.feedsReducer.explore,
  profile: state.profileReducer.userProfile,
  profile1: state.profileReducer.profile,
  likers: state.likersReducer.likers,
  user: state.user,
  comments: state.commentsReducer.comments,
});

const mapDispatchToProps = {
  likePost,
  fetchLikers,
  fetchUserProfile,
  fetchComments,
  addComment,
  fetchExplore,
  fetchFeeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

{
  /* <PostCard
navigation={navigation}
key={post.id}
post={post}
isLiked={feed.liked}
r={feed.id}
/> */
}

{
  /* <View
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
    fontFamily: "Cochin",
  }}
>
  Description
</Text>
</View> */
}
