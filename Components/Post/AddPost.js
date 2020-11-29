import React, { useState } from "react";
import { connect } from "react-redux";

//screens
import { ADDIMAGE } from "../../Navigation/screenNames";

//actions
import { addPost } from "../../redux/actions";

//style
import { Container } from "native-base";
import { Text, Alert, ImageBackground } from "react-native";
import styles from "./styles";

import { TouchableOpacity } from "react-native-gesture-handler";

// import Icon from "react-native-vector-icons/Feather";

const AddPost = ({ navigation, items, photos, addPost }) => {
  const [description, setDescription] = useState("");
  console.log(photos.length);
  console.log(items.length);

  function handelAddPost() {
    if (description != "" && items.length > 0 && photos.length > 0) {
      addPost({
        description,
        items,
        photos,
      });
      setDescription("");
    } else Alert.alert("please fill all Fields");
  }

  return (
    <Container style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/add_post17.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(ADDIMAGE)}
          style={styles.startPostButtonDiv}
        >
          <Text style={styles.showOff}>show off your elegance..</Text>
        </TouchableOpacity>
      </ImageBackground>
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
