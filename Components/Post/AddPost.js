import React from "react";
import { connect } from "react-redux";

//screens
import { ADDIMAGE } from "../../Navigation/screenNames";
import { ADDITEM } from "../../Navigation/screenNames";

//style
import { Button, Container, View } from "native-base";
import { Text, Alert } from "react-native";
import styles from "./styles";

const AddPost = ({ navigation }) => {
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Add post</Text>
      </View>
      <View style={{ paddingBottom: 30 }}>
        <Button onPress={() => navigation.navigate(ADDIMAGE)}>
          <Text>+ Image</Text>
        </Button>
      </View>
      <View style={{ paddingBottom: 30 }}>
        <Button onPress={() => navigation.navigate(ADDITEM)}>
          <Text>+ Item</Text>
        </Button>
      </View>
      <View style={{ paddingBottom: 30 }}>
        <Button onPress={() => Alert.alert(" submit Button will be here")}>
          <Text>Add</Text>
        </Button>
      </View>
    </Container>
  );
};

// const mapDispatchToProps = {
//   pass,
// };

// export default connect(null, mapDispatchToProps)(AddPost);
export default AddPost;
