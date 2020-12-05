import React, { useEffect, useState } from "react";

//style
import { Container, Text, Button, List, View } from "native-base";
import styles from "./styles";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";
import { fetchComments, addComment } from "../../redux/actions";
import { connect } from "react-redux";

const Comm = ({ route, addComment, comments }) => {
  const { post_id } = route.params;
  // useEffect(() => {
  //   // console.log("im here");
  //   fetchComments(post_id);
  // }, []);
  //console.log(owner);

  const postComments = comments.map((comment) => comment);

  const [newComment, setComment] = useState("");
  //const [counter, setCounter] = useState(0);

  let handelAddComment = () => {
    if (newComment != "") {
      addComment({ txt: newComment, post_id: post_id });
      // window.location.reload(false);
      setComment("");
    }
  };

  const commentsList = postComments.map((item, index) => {
    return (
      <ListItem key={index} bottomDivider>
        <Avatar
          source={{
            uri: item.commenter?.image
              ? item.commenter?.image
              : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{item.commenter?.user.username}</ListItem.Title>
          <ListItem.Subtitle>{item.txt}</ListItem.Subtitle>
        </ListItem.Content>
        {/* <ListItem.Chevron /> */}
      </ListItem>
    );
  });

  return (
    <Container>
      <ScrollView horizontal={false}>
        <List>{commentsList}</List>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          // width: 140,
          // height: 22,
          justifyContent: "space-between",
          marginLeft: 2,
          marginRight: 2,
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <TextInput
          placeholder="description"
          placeholderTextColor="#A6AEC1"
          value={newComment}
          onChangeText={setComment}
          autoCapitalize="none"
          style={{
            alignSelf: "flex-end",
            height: 42,
            width: 305,
          }}
        ></TextInput>
        <Button
          style={{
            alignSelf: "flex-end",
            backgroundColor: "black",
            marginLeft: -10,
          }}
          bordered
          onPress={() => handelAddComment()}
        >
          <Text style={{ color: "white" }}> Comment</Text>
        </Button>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  comments: state.commentsReducer.comments,
});

const mapDispatchToProps = {
  fetchComments,
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comm);
//onPress={() => navigation.navigate(LIKED_FEEDS)
