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
import { View, Text, Image } from "react-native";
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


  useEffect(() => {
    //console.log("im here");
    fetchExplore();
    fetchFeeds();
    fetchUserProfile(post.owner.id);
    fetchLikers(post.id);
    fetchComments(post.id);
  }, );


  let handelUserProfile = () => {
    navigation.navigate(USER_PROFILE, { owner: post.owner_name, profile });
  };


  const itemsList = feed.items.map((item) => {
    return <PostItems key={item.id} item={item} />;
  });


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
        
        <View style={{ width: "18%", paddingLeft: 20 }}>
          
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="black"
              style={{ marginVertical: 30 }}
            />
          </TouchableOpacity>
          <ScrollView>
        {itemsList}
      </ScrollView>
          
        </View>
        <View style={{ width: "90%" }}>
          <SwiperComponent post={post}/>
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
