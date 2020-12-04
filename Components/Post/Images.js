import React, { useState } from "react";
import { connect } from "react-redux";

//actions
import { likePost } from "../../redux/actions";

//style
import Icon from "react-native-vector-icons/AntDesign";
import { View } from "native-base";
import { ImageBackground, Text, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel";

const AddImage = ({ photos, isLiked, likers_number, likePost, post_id }) => {
  const [liked, setLiked] = useState(isLiked);
  console.log("isLiked", isLiked);
  const [likersNumber, setLikersNumber] = useState(likers_number);

  function handelLike() {
    likePost({ post_id: post_id });

    if (liked) {
      setLiked(false);
      setLikersNumber(likersNumber - 1);
    } else {
      setLiked(true);
      setLikersNumber(likersNumber + 1);
    }
  }

  function renderPhotos({ item }) {
    return (
      <View style={{}}>
        <ImageBackground
          source={{ uri: item.image }}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.buttonDiv}>
            <Icon
              name="heart"
              onPress={handelLike}
              size={20}
              style={
                liked
                  ? {
                      color: "tomato",
                      alignSelf: "center",
                    }
                  : {
                      color: "black",
                      alignSelf: "center",
                    }
              }
            />
            <Text style={styles.likers}>{likersNumber}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={{}}>
      <Carousel
        renderItem={renderPhotos}
        sliderWidth={375}
        itemWidth={310}
        layout={"default"}
        data={photos}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 500,
    backgroundColor: "red",
    marginTop: 8,
    alignSelf: "center",
  },
  buttonDiv: {
    width: 69,
    height: 59,
    justifyContent: "space-between",
    marginTop: 336,
    //marginLeft: 167,
    alignSelf: "flex-end",
  },
  icon: {
    width: 37,
    height: 21,
    alignSelf: "center",
  },
  likers: {
    fontFamily: "Cochin",
    color: "#121212",
    alignSelf: "center",
    width: 37,
    height: 41,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  ff: state.postReducer.photos,
});

const mapDispatchToProps = {
  likePost,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddImage);

// <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate(LIKERS, {
//                    likers: likers,
//                    post_id: post.id,
//                 })
//                }
//             >
