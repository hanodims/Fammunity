import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import {
  COMMENTS,
  LIKED_FEEDS,
  LIKERS,
  USER_PROFILE,
} from "../../Navigation/screenNames";

import Icon from "react-native-vector-icons/Feather";

import { View, Text, StyleSheet } from "react-native";

import PostItems from "./PostItems";

import { ScrollView } from "react-native-gesture-handler";
import {
  likePost,
  fetchLikers,
  fetchUserProfile,
  fetchComments,
  addComment,
  fetchExplore,
  fetchFeeds,
} from "../../redux/actions";
import { FEED } from "../../Navigation/screenNames";
import Images from "./Images";

const PostDetail = ({
  explore,
  route,
  profile,
  comments,
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
  r,
}) => {
  const { feed } = route.params;
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [liked, setLiked] = useState(feed.liked);
  //console.log("isLiked", feed);
  const [likersNumber, setLikersNumber] = useState(feed.likers_number);

  function handelLike() {
    likePost({ post_id: feed.id });

    if (liked) {
      setLiked(false);
      setLikersNumber(likersNumber - 1);
    } else {
      setLiked(true);
      setLikersNumber(likersNumber + 1);
    }
  }

  useEffect(() => {
    console.log("im here7");
    fetchExplore();
    //     fetchFeeds();
    fetchUserProfile(feed.owner.id);
    fetchLikers(feed.id);
    fetchComments(feed.id);
  }, [likersNumber]);

  function handelPress(n, p, b) {
    setBrand(b), setName(n), setPrice(p);
  }

  let handelComment = () => {
    //console.log(feed.id);
    fetchComments(feed.id);
  };

  let handelUserProfile = () => {
    navigation.navigate(USER_PROFILE, {
      owner: post.owner,
    });
  };

  const post = explore.find((post) => post.id === feed.id);
  const itemsList = feed.items.map((item, index) => {
    // console.log("im working", post.owner);
    return <PostItems key={index} item={item} handelPress={handelPress} />;
  });

  return (
    <View style={styles.container}>
      <View style={styles.all}>
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack(FEED)}
            name="corner-up-left"
            size={25}
            style={styles.back}
          />
          <Text onPress={handelUserProfile} style={styles.title}>
            {post.owner.user.username}
          </Text>
          <Icon
            onPress={() =>
              navigation.navigate(COMMENTS, {
                comments: comments,
                post_id: post.id,
                owner: post.owner,
              })
            }
            name="message-circle"
            size={25}
            style={{
              width: 75,
              height: 30,
              marginLeft: 52,
              alignSelf: "center",
            }}
          />
        </View>
        <View style={styles.photos}>
          <Images
            likers_number={post.likers_number}
            photos={post.photos}
            isLiked={post.liked}
            post_id={post.id}
          />
          <View style={styles.buttonDiv}>
            <Icon
              name="heart"
              onPress={handelLike}
              size={24}
              style={
                liked
                  ? {
                      color: "tomato",
                    }
                  : {
                      color: "black",
                    }
              }
            />
            <Text
              onPress={() =>
                navigation.navigate(LIKERS, { likers, post_id: feed.id })
              }
              style={styles.likers}
            >
              {likersNumber}
            </Text>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.descStack}>
            <View style={styles.desc}>
              <Text style={styles.description}>{post.description}</Text>
            </View>
            <View style={styles.selectDiv}>
              <Text style={styles.select}>
                Select Brand Name for more detail
              </Text>
            </View>
          </View>
          <View style={styles.scrollAreaStack}>
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                {itemsList}
              </ScrollView>
            </View>
            <View style={styles.itemDetailDiv}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.brandName}>{brand}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonDiv: {
    top: -50,
    backgroundColor: "white",
    width: 50,
    height: 50,
    alignItems: "center",
    borderRadius: 40,
    alignSelf: "flex-end",
    justifyContent: "center",
    marginEnd: 20,
  },
  all: {
    width: 414,
    height: 896,
    marginTop: 33,
    backgroundColor: "white",
  },
  header: {
    width: 375,
    height: 75,
    flexDirection: "row",
    alignSelf: "center",
  },
  back: {
    width: 75,
    height: 30,
    marginLeft: 23,
    alignSelf: "center",
  },
  title: {
    fontFamily: "Cochin",
    color: "#121212",
    height: 30,
    width: 160,
    textAlign: "center",
    marginLeft: 10,
    alignSelf: "center",
    fontSize: 25,
  },
  photos: {
    width: 375,
    height: 500,
    marginTop: 2,
    marginLeft: 20,
  },

  likers: {
    fontFamily: "Cochin",
    color: "#121212",
    alignSelf: "center",
    textAlign: "center",
  },
  details: {
    width: 375,
    height: 237,
    backgroundColor: "white",
    marginTop: 0,
    alignSelf: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    //shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
  },
  desc: {
    top: 0,
    width: 343,
    height: 85,
    position: "absolute",
    left: 0,
    justifyContent: "center",
  },
  description: {
    fontFamily: "Cochin",
    color: "#121212",
    textAlign: "left",
    fontSize: 22,
    width: 255,
    // height: 60,
    marginTop: 5,
  },
  selectDiv: {
    top: 80,
    width: 343,
    height: 20,
    position: "absolute",
    left: 0,
  },
  select: {
    color: "#000",
    width: 249,
    height: 16,
    textAlign: "left",
    marginTop: 11,
  },
  descStack: {
    width: 343,
    height: 121,
    marginTop: 7,
    marginLeft: 16,
  },
  scrollArea: {
    top: -15,
    width: 343,
    height: 37,
    position: "absolute",
    left: 0,
  },
  scrollArea_contentContainerStyle: {
    height: 37,
    width: 1000,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },

  itemDetailDiv: {
    top: 20,
    width: 343,
    height: 58,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
  },
  name: {
    fontFamily: "Cochin",
    color: "#121212",
    textAlign: "left",
    alignSelf: "center",
    width: 155,
    height: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  price: {
    fontFamily: "Cochin",
    color: "#5A0016",
    textAlign: "left",
    alignSelf: "center",
    width: 80,
    height: 50,
    fontWeight: "bold",
    fontSize: 18,
  },
  brandName: {
    textAlign: "left",
    fontFamily: "Cochin",
    alignSelf: "center",
    width: 150,
    height: 50,
    fontWeight: "bold",
    fontSize: 20,
  },
  scrollAreaStack: {
    width: 343,
    height: 92,
    marginTop: 4,
    marginLeft: 16,
  },
});

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
