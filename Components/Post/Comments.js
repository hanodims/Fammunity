import React from "react";

//components
import CommentCard from "./CommentCard";

//style
import { Container } from "native-base";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

const Comments = ({ comments}) => {
  function commentsList({ item }) {
    return <CommentCard comment={item} />;
  }

  return (
    <Container>
      <Container style={styles.FeedDev}>
        <FlatList
          data={comments}
          numColumns={3}
          renderItem={commentsList}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </Container>
  );
};

export default Comments;