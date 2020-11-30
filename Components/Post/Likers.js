import React, { useEffect } from "react";

//style
import { Container } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from "react-native-elements";
import { fetchLikers } from "../../redux/actions";
import { connect } from "react-redux";

const Likers = ({ route }) => {
  const { likers, post_id } = route.params;

  // useEffect(() => {
  //   console.log("im here2");
  //   fetchLikers(post_id);
  // }, []);

  const postLikers = likers.liked_by.map((liker) => liker);

  function likersList({ item }) {
    return (
      <ListItem bottomDivider>
        <Avatar
          source={{
            uri: item.image
              ? item.image
              : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{item.user.username}</ListItem.Title>
          {/* <ListItem.Subtitle>{item.user.username}</ListItem.Subtitle> */}
        </ListItem.Content>
        {/* <ListItem.Chevron /> */}
      </ListItem>
    );
  }

  return (
    <Container>
      <FlatList
        data={postLikers}
        renderItem={likersList}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  likers: state.likersReducer.likers,
});

const mapDispatchToProps = {
  fetchLikers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Likers);
//onPress={() => navigation.navigate(LIKED_FEEDS)
