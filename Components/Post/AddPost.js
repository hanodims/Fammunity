import React, { useState } from "react";
import { connect } from "react-redux";

//screens
import { ADDIMAGE } from "../../Navigation/screenNames";

//actions
import { addPost } from "../../redux/actions";

//style
import { Button, Container } from "native-base";
import { Text, ImageBackground } from "react-native";
import styles from "./styles";

const AddPost = ({ navigation }) => {
  const [description, setDescription] = useState("");

  return (
    <Container style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/add_post17.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <Button
          rounded
          dark
          onPress={() => navigation.navigate(ADDIMAGE)}
          style={styles.startPostButtonDiv}
        >
          <Text style={styles.showOff}>show off your elegance..</Text>
        </Button>
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
