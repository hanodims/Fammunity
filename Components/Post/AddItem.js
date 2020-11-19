import React from "react";
import { connect } from "react-redux";

//style
import { Button, Container, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";

const AddItem = () => {
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Add Item</Text>
      </View>
    </Container>
  );
};

// const mapDispatchToProps = {
//   pass,
// };

// export default connect(null, mapDispatchToProps)(AddPost);
export default AddItem;
