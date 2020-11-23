import React from "react";
import { connect } from "react-redux";

//style
import { Container, Text } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";

const Likers = ({ likers, route }) => {
  const { post_id } = route.params;

  const filterLikers = likers.filter((liker) => (liker.id = post_id));
  const postLikers = filterLikers.map((liker) => liker.likers);

  // console.log("post_id ", post_id);
  // console.log("filterLikers ", filterLikers);

  function likersList({ item }) {
    // console.log("likers,item", item.likers);
    return (
      <ListItem bottomDivider>
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
      <Container style={styles.FeedDev}>
        <FlatList
          data={postLikers}
          renderItem={likersList}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  likers: state.likersReducer.likers,
});

export default connect(mapStateToProps)(Likers);
