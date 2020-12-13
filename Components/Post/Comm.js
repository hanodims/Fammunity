
import React, { useState } from "react";

//style
import { Text, Button, Container } from "native-base";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";
import { fetchComments, addComment } from "../../redux/actions";
import { connect } from "react-redux";
import { TextInput } from "react-native-gesture-handler";


const Comm = ({ route, addComment }) => {
  const { comments, post_id, owner } = route.params;

  const [newComment, setComment] = useState("");

  const postComments = comments.map((comment) => comment);

  let handelAddComment = () => {
    if (newComment != "") {
      addComment({ txt: newComment, post_id: post_id });
    }
  };

  function commentsList({ item }) {
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
      </ListItem>
    );
  });

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
      ></TextInput>
      <Button bordered dark onPress={() => handelAddComment()}>
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
