import React from "react";

//style
import { Container } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";
import { fetchComments } from "../../redux/actions";
import { connect } from "react-redux";

const Comm = ({ route }) => {
  const { comments, post_id, owner } = route.params;
  console.log(owner);

  const postComments = comments.map((comment) => comment);

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
    </Container>
  );
};

const mapStateToProps = (state) => ({
  comments: state.commentsReducer.comments,
});

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comm);
//onPress={() => navigation.navigate(LIKED_FEEDS)
