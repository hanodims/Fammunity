import React from "react";

//style
import { Container } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";

const Likers = ({ route }) => {
  const { likers } = route.params;

  const postLikers = likers.liked_by.map((liker) => liker);

  function likersList({ item }) {
    return (
      <ListItem key={item.id} bottomDivider>
        <Avatar
          source={{
            uri: item.image
              ? item.image
              : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
          }}
        />
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

export default Likers;
