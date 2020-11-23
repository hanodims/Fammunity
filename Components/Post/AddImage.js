import React, { useState } from "react";
import { connect } from "react-redux";

import * as ImagePicker from "expo-image-picker";

//screens
import { ADD_POST } from "../../Navigation/screenNames";

//actions
import { addImage } from "../../redux/actions";

//style
import { Button, Container, Toast, View } from "native-base";
import { Alert, Image, Text } from "react-native";
import styles from "./styles";

const AddImage = ({ addImage, navigation }) => {
  console.log(Platform.OS);
  const [selectImg, setSelectedImg] = useState(null);

  function handelAdding() {
    if (selectImg) {
      let filename = selectImg.localUri.split("/").pop();
      // image type
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let uri;
      if (Platform.OS === "ios") {
        uri = selectImg.localUri.replace("file://", "");
      } else {
        uri = selectImg.localUri;
      }

      addImage({
        uri: uri,
        name: filename,
        type,
      });
      setSelectedImg(null);
    } else {
      Alert.alert("Pick Image First");
    }
  }

  let takePhoto = async () => {
    let permission = await ImagePicker.requestCameraPermissionsAsync();

    if (permission.granted === false) {
      return;
    }
    let permission2 = await ImagePicker.getCameraRollPermissionsAsync();

    if (permission2.granted === false) {
      return;
    }

    let picker = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (picker.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: picker.uri });
    // console.log("picker", picker);
  };
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
    // console.log("picker", picker);
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
        <Button onPress={openImage} style={styles.button}>
          <Text>Choose from library</Text>
        </Button>
        <Button onPress={takePhoto} style={styles.button}>
          <Text>Take photo</Text>
        </Button>
      </View>
      <Button style={styles.button} onPress={handelAdding}>
        <Text>Add</Text>
      </Button>

      <Button
        rounded
        bordered
        dark
        style={styles.button}
        onPress={() => navigation.goBack(ADD_POST)}
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
