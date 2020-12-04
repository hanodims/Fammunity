import React, { useEffect, useState } from "react";

//style
import { Container, Text, Button } from "native-base";
import styles from "./styles";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";
import { fetchComments, addComment } from "../../redux/actions";
import { connect } from "react-redux";

const Comm = ({ route, addComment }) => {
  useEffect(() => {
    console.log("im here");
    fetchComments();
  }, []);
  const { comments, post_id, owner } = route.params;
  //console.log(owner);

  const postComments = comments.map((comment) => comment);

  const [newComment, setComment] = useState("");
  //const [counter, setCounter] = useState(0);

  let handelAddComment = () => {
    if (newComment != "") {
      addComment({ txt: newComment, post_id: post_id });
      // window.location.reload(false);
    }
  };

  function commentsList({ item }) {
    return (
      <ListItem bottomDivider>
        <Avatar
          source={{
            uri: owner?.image
              ? owner?.image
              : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{owner.user.username}</ListItem.Title>
          <ListItem.Subtitle>{item.txt}</ListItem.Subtitle>
        </ListItem.Content>
        {/* <ListItem.Chevron /> */}
      </ListItem>
    );
  }

  return (
    <Container>
      <FlatList
        data={postComments}
        renderItem={commentsList}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextInput
        placeholder="description"
        placeholderTextColor="#A6AEC1"
        value={newComment}
        onChangeText={setComment}
        autoCapitalize="none"
        style={{ height: 100 }}
      ></TextInput>
      <Button
        style={{ alignSelf: "center" }}
        bordered
        dark
        onPress={() => handelAddComment()}
      >
        <Text>Comment</Text>
      </Button>
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
