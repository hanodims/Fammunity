import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//components
import PostItems from "./PostItems";

//actions
import { likePost, fetchLikers, fetchUserProfile, fetchComments } from "../../redux/actions";

//screens
import { LIKERS, USER_PROFILE } from "../../Navigation/screenNames";
import Comments from './Comments'

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
} from "native-base";
import { Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const PostCard = ({
  post,
  likePost,
  fetchLikers,
  fetchUserProfile,
  navigation,
  profile,
  fetchComments,
  comments,
  likers,
}) => {
  useEffect(() => {
    fetchUserProfile(post.owner);
    fetchLikers(post.id);
    fetchComments(post.id)
  }, [liked]);

  const [liked, setLiked] = useState(post.liked);
  const [likersNumber, setLikersNumber] = useState(post.likers_number);

  const itemsList = post.items.map((item) => {
    return <PostItems key={item.id} item={item} />;
  });

  let handelUserProfile = () => {
    navigation.navigate(USER_PROFILE, { owner: post.owner_name, profile });
  };

  function handelLike() {
    console.log("liked: postcard ", post.liked);
    console.log("likersNumber: postcard ", post.likers_number);
    likePost({ post_id: post.id });
    console.log("post_id: post.id ", post.id);
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
              onPress={() => navigation.navigate(LIKERS, { likers: likers })}
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
      <Comments comments={comments}></Comments>

      <ScrollView>{itemsList}</ScrollView>
      <View
        style={{
          padding: 5,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Comment Section</Text>
        
      </View>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profileReducer.userProfile,
  likers: state.likersReducer.likers,
  comments: state.commentsReducer.comments,
});

const mapDispatchToProps = {
  likePost,
  fetchLikers,
  fetchUserProfile,
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
