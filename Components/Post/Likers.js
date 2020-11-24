import React from "react";
import { connect } from "react-redux";

//style
import { Container, Text } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";

const Likers = ({ likers }) => {
  const postLikers = likers.liked_by.map((liker) => liker);

  function likersList({ item }) {
    return (
      <ListItem key={item.id} bottomDivider>
        <Avatar source={{ uri: item.image }} />
        <ListItem.Content>
          <ListItem.Title>{item.user.username}</ListItem.Title>
          <ListItem.Subtitle>{item.user.username}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  }

  return (
    <Container>
      <FlatList
        data={postLikers}
        renderItem={likersList}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  likers: state.likersReducer.likers,
});

export default connect(mapStateToProps)(Likers);
