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
  Container,
  Right,
  Button,
} from "native-base";
import Carousel from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/AntDesign";
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  ImageBackground,
} from "react-native";
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
import { FEED } from "../../Navigation/screenNames";
import Images from "./Images";

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
//     fetchExplore();
//     fetchFeeds();
//     fetchUserProfile(feed.owner.id);
//     fetchLikers(feed.id);
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

    
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#FFF",
//       }}
//     >
//       <View></View>
//       <View
//         style={{
//           flexDirection: "row",
//           width: "100%",
//           height: "90%",
//         }}
//       >
//         <View style={{ width: "18%", paddingLeft: 20 }}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Ionicons
//               name="ios-arrow-back"
//               size={24}
//               color="black"
//               style={{ marginVertical: 30 }}
//             />
//           </TouchableOpacity>
//           <ScrollView>{itemsList}</ScrollView>

    <View style={styles.container}>
      <View style={styles.all}>
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack(FEED)}
            name="back"
            size={25}
            style={styles.back}
          />
          <Text style={styles.title}>{post.owner.user.username}</Text>

        </View>
        <View style={styles.photos}>
          <Images
            likers_number={post.likers_number}
            photos={post.photos}
            isLiked={post.liked}
            post_id={post.id}
          />
        </View>



//      
//             <View>
//             <Card transparent style={{}}>
//         <CardItem>
//           <Left>
//             <Thumbnail
//               source={{
//                 uri: profile.image
//                   ? profile.image
//                   : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
//               }}
//             />
//            
//           </Left>
//           <Right>
//             <Icon
//               onPress={handelLike}
//               name="heart"
//               style={liked ? { color: "#ED4A6A" } : { color: "#000" }}
//             />
//             <TouchableOpacity
//               onPress={() =>
//                 navigation.navigate(LIKERS, {
//                   likers: likers,
//                   post_id: post.id,
//                 })
//               }
//             >
//               <Text note>{likersNumber}</Text>
//             </TouchableOpacity>
//           </Right>
//         </CardItem>
//       </Card>
//               <TouchableOpacity onPress={() =>
//                 navigation.navigate(COMMENTS, {
//                   comments: comments,
//                   post_id: post.id,
//                 })
//               }>
//           <Text>Comments</Text>
//         </TouchableOpacity>
            
//               <Comments comments={comments}></Comments></View>

//           </Text>

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
    height: 470,
    marginTop: 2,
    marginLeft: 20,
  },

  likers: {
    fontFamily: "Cochin",
    color: "#121212",
    alignSelf: "center",
    width: 37,
    height: 41,
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
    height: 60,
    marginTop: 5,
  },
  selectDiv: {
    top: 90,
    width: 343,
    height: 20,
    position: "absolute",
    left: 0,
  },
  select: {
    fontFamily: "Arial",
    color: "#121212",
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
    top: 0,
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
  brand: {
    fontFamily: "Cochin",
    color: "#121212",
    textAlign: "center",
    width: 76,
    height: 16,
    marginTop: 11,
    alignSelf: "center",
  },
  itemDetailDiv: {
    top: 34,
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
    color: "#121212",
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
