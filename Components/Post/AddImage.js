import React, { useState } from "react";
import { connect } from "react-redux";
import { Platform } from "react-native";

import * as ImagePicker from "expo-image-picker";

//screens
import { ADD_POST } from "../../Navigation/screenNames";

//actions
import { addImage } from "../../redux/actions";

//style
import { Button, Container, View } from "native-base";
import { Image, Text } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddImage = ({ addImage, navigation }) => {
  const [selectImg, setSelectedImg] = useState(null);
  console.log(Platform.OS === "android");
  function handelAdding() {
    let filename;
    if (Platform.OS === "android") {
      filename = selectImg.localUri.split("/").pop();
    } else {
      filename = "hi";
    }
    // image type
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    addImage({
      uri: selectImg.localUri.replace("file://", ""),
      name: filename,
      type,
    });
    setSelectedImg(null);
  }

  let openImage = async () => {
    let permission = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permission.granted === false) {
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (picker.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: picker.uri });
    console.log("picker", picker);
  };

  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Add Image</Text>
      </View>

      <View style={styles.container}>
        {selectImg && (
          <Image
            style={styles.image}
            source={{
              uri:
                selectImg.localUri !== null
                  ? selectImg.localUri
                  : "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2019/08/FullMoon.jpg?mw=600",
            }}
          />
        )}
        <TouchableOpacity onPress={openImage} style={styles.button}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
      <Button style={styles.button} onPress={handelAdding}>
        <Text>Add</Text>
      </Button>

      <Button
        rounded
        bordered
        dark
        style={styles.button}
        onPress={() => navigation.replace(ADD_POST)}
      >
        <Text>Done</Text>
      </Button>
    </Container>
  );
};

const mapDispatchToProps = {
  addImage,
};
export default connect(null, mapDispatchToProps)(AddImage);
