import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import { COMMENTS, LIKERS, USER_PROFILE } from "../../Navigation/screenNames";
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

const PostDetail = ({ explore, route, profile, comments,
  likePost,
  fetchLikers,
  fetchUserProfile,
  addComment,
  navigation,
  fetchComments,
  likers,
  isLiked,
  fetchExplore,
  fetchFeeds,
  r, }) => {


  const { feed } = route.params;
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  
  useEffect(() => {
    //console.log("im here");
    fetchExplore();
    fetchFeeds();
    fetchUserProfile(feed.owner.id);
    fetchLikers(feed.id);
    fetchComments(feed.id);
  },[liked]);


  const [liked, setLiked] = useState(isLiked);
  const [likersNumber, setLikersNumber] = useState(feed.likers_number);
  const [comment, setComment] = useState("");


  function handelPress(n, p, b) {
    setBrand(b), setName(n), setPrice(p);
  }

  let handelComment = () => {
    //console.log(feed.id);
    fetchComments(feed.id);
  };

  let handelUserProfile = () => {
    navigation.navigate(USER_PROFILE, { owner: post.owner_name, profile });
  };


  function handelLike() {
    likePost({ post_id: post.id });

    if (liked) {
      setLiked(false);
      setLikersNumber(likersNumber - 1);
    } else {
      setLiked(true);
      setLikersNumber(likersNumber + 1);
    }
  }
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
      <View></View>
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
          <SwiperComponent post={post} key={post.id} />
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
            <View>
            <Card transparent style={{}}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: profile.image
                  ? profile.image
                  : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
              }}
            />
            <Body>
              <TouchableOpacity onPress={handelUserProfile}>
                <Text>{feed.owner_name}</Text>
                <Text note> decide later</Text>
              </TouchableOpacity>
            </Body>
          </Left>
          <Right>
            <Icon
              onPress={handelLike}
              name="heart"
              style={liked ? { color: "#ED4A6A" } : { color: "#000" }}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(LIKERS, {
                  likers: likers,
                  post_id: post.id,
                })
              }
            >
              <Text note>{likersNumber}</Text>
            </TouchableOpacity>
          </Right>
        </CardItem>
      </Card>
              <TouchableOpacity onPress={() =>
                navigation.navigate(COMMENTS, {
                  comments: comments,
                  post_id: post.id,
                })
              }>
          <Text>Comments</Text>
        </TouchableOpacity>
            
              <Comments comments={comments}></Comments></View>
    
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
