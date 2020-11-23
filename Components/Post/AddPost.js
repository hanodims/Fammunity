import React, { useState } from "react";
import { connect } from "react-redux";

//screens
import { ADDIMAGE } from "../../Navigation/screenNames";
import { ADDITEM } from "../../Navigation/screenNames";

//style
import { Button, Container, View } from "native-base";
import { Text, Alert } from "react-native";
import styles from "./styles";
import { color } from "react-native-reanimated";

//actions
import { addPost } from "../../redux/actions";
import { TextInput } from "react-native-gesture-handler";

const AddPost = ({ navigation, items, photos, addPost }) => {
  const [description, setDescription] = useState("");

  // console.log("im state.items", items);
  // console.log("im state.photos", photos);
  function handelAddPost() {
    if (description != "" && items != null && photos != null) {
      addPost({
        description,
        items,
        photos,
      });
      setDescription("");
    } else Alert.alert("please fill all Fields");
  }
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Add post</Text>
      </View>
      <View
        style={{
          paddingBottom: 30,
        }}
      >
        <TextInput
          placeholder="description"
          placeholderTextColor="#A6AEC1"
          value={description}
          onChangeText={setDescription}
          autoCapitalize="none"
        ></TextInput>
        <Button
          rounded
          bordered
          dark
          style={styles.button}
          onPress={() => navigation.navigate(ADDIMAGE)}
        >
          <Text>+ Image</Text>
        </Button>
      </View>
      <View style={{ paddingBottom: 30 }}>
        <Button
          rounded
          bordered
          dark
          style={styles.button}
          onPress={() => navigation.navigate(ADDITEM)}
        >
          <Text>+ Item</Text>
        </Button>
      </View>
      <View style={{ paddingBottom: 30 }}>
        <Button
          bordered
          dark
          style={styles.button}
          onPress={() => handelAddPost()}
        >
          <Text>Add</Text>
        </Button>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  items: state.postReducer.items,
  photos: state.postReducer.photos,
});
const mapDispatchToProps = {
  addPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
