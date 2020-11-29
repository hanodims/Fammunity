import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//components
import PostItems from "./PostItems";

//actions
import {
  likePost,
  fetchLikers,
  fetchUserProfile,
  fetchComments,
  addComment,
} from "../../redux/actions";

//screens
import { LIKERS, USER_PROFILE } from "../../Navigation/screenNames";
import Comments from "./Comments";

import {
  View,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Container,
  Right,
  Button,
} from "native-base";
import { Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";

const PostCard = ({
  post,
  likePost,
  fetchLikers,
  fetchUserProfile,
  addComment,
  navigation,
  profile,
  fetchComments,
  comments,
  likers,
  isLiked,
  r,
}) => {
  useEffect(() => {
    console.log("im here");
    fetchUserProfile(post.owner);
    fetchLikers(post.id);
    fetchComments(r);
  }, []);

  const [liked, setLiked] = useState(isLiked);
  const [likersNumber, setLikersNumber] = useState(post.likers_number);
  const [comment, setComment] = useState("");

  const itemsList = post.items.map((item) => {
    return <PostItems key={item.id} item={item} />;
  });

  let handelUserProfile = () => {
    navigation.navigate(USER_PROFILE, { owner: post.owner_name, profile });
  };

  let handelAddComment = () => {
    if (comment != "") {
      addComment({ txt: comment, post_id: post.id });
    }
  };

  let handelComment = () => {
    fetchComments(r);
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

  const imgList = post.photos.map((item) => {
    return (
      <View key={item.id} style={styles.slide}>
        <Image
          source={{ uri: item.image }}
          style={styles.sliderImage}
          resizeMode="cover"
        />
      </View>
    );
  });

  return (
    <Container>
      <View style={styles.sliderContainer}>
        <Swiper autoplay height={200} activeDotColor="#FFFFFF">
          {imgList}
        </Swiper>
      </View>

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
                <Text>{post.owner_name}</Text>
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

        <CardItem>
          <Left>
            <Body>
              <Text>{post.description}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
      <TextInput
        placeholder="description"
        placeholderTextColor="#A6AEC1"
        value={comment}
        onChangeText={setComment}
        autoCapitalize="none"
        style={styles.description}
      ></TextInput>
      <Button
        bordered
        dark
        style={styles.button}
        onPress={() => handelAddComment()}
      >
        <Text>Comment</Text>
      </Button>
      {/* <Comments comments={comments}></Comments> */}

      <ScrollView>{itemsList}</ScrollView>
      <View
        style={{
          padding: 5,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handelComment}>
          <Text>Comments</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
const mapStateToProps = (state) => ({
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
