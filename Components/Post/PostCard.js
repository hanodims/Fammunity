import React, { useState } from "react";
import { connect } from "react-redux";

//components
import PostItems from "./PostItems";

//actions
import { likePost } from "../../redux/actions";

//screens
import { LIKERS } from "../../Navigation/screenNames";

import {
  View,
  DeckSwiper,
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

const PostCard = ({ post, likePost, navigation }) => {
  const itemsList = post.items.map((item) => {
    return <PostItems key={item.id} item={item} />;
  });
  function handelLike() {
    likePost({ post_id: post.id });
    if (liked) {
      setLiked(false);
    } else setLiked(true);
  }
  const [liked, setLiked] = useState(false);

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
            <Thumbnail source={{ uri: post.photos[0].image }} />
            <Body>
              <Text>post.owner</Text>
              <Text note> decide later</Text>
            </Body>
          </Left>
          <Right>
            <TouchableOpacity
              onPress={() => navigation.navigate(LIKERS, { post_id: post.id })}
            >
              <Icon
                onPress={handelLike}
                name="heart"
                style={liked ? { color: "#ED4A6A" } : { color: "#000" }}
              />
              <Text note>{post.likers_number}</Text>
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
const mapDispatchToProps = {
  likePost,
};

export default connect(null, mapDispatchToProps)(PostCard);
