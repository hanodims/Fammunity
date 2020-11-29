import React, { useState } from "react";
import { connect } from "react-redux";

import * as ImagePicker from "expo-image-picker";

//screens
import { ADDITEM, ADD_POST } from "../../Navigation/screenNames";

//actions
import { addImage, removePhoto } from "../../redux/actions";

//style
import Icon from "react-native-vector-icons/Feather";
import { View } from "native-base";
import { ImageBackground, Text } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";

const AddImage = ({ addImage, navigation, photos, removePhoto }) => {
  function renderPhotos({ item }) {
    return (
      <View
        style={{
          width: 350,
          height: 500,
          marginTop: 15,
        }}
      >
        <ImageBackground
          source={{ uri: item.uri }}
          style={{
            width: 292,
            height: 450,
            borderRadius: 15,
            alignSelf: "center",
          }}
          imageStyle={{ borderRadius: 15 }}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.removeItemButton}>
          <Icon
            style={{}}
            name="x-circle"
            size={20}
            color="#000"
            onPress={() => removePhoto(item)}
          />
        </View>
      </View>
    );
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

    // console.log("picker", picker);
    let filename = picker.uri.split("/").pop();
    // image type
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let uri;
    if (Platform.OS === "ios") {
      uri = picker.uri.replace("file://", "");
    } else {
      uri = picker.uri;
    }
    addImage({
      uri: uri,
      name: filename,
      type,
    });
  };

  var img =
    photos.length == 0
      ? require("../../assets/add_photos.png")
      : require("../../assets/white.png");

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={img} style={{ flex: 1, resizeMode: "cover" }}>
        <View style={styles.AddTitleDiv}>
          <View style={styles.AddTitleRow}>
            <Icon
              style={{
                width: 34,
                height: 28,
                marginTop: 9,
              }}
              name="arrow-left"
              size={20}
              onPress={() => navigation.goBack(ADD_POST)}
            />
            <Text style={styles.AddTitleText}>Add Photos</Text>
          </View>
        </View>

        <View style={styles.showPhotos}>
          {photos.length == 0 && (
            <View style={styles.addFirsttIcon}>
              <Icon name="image" size={30} onPress={openImage}></Icon>
            </View>
          )}
          {photos.length > 0 && (
            <View>
              <View style={styles.iconDev}>
                <View style={styles.addPostIcon}>
                  <Icon name="image" size={30} onPress={openImage}></Icon>
                </View>
              </View>

              <Carousel
                renderItem={renderPhotos}
                sliderWidth={500}
                itemWidth={350}
                layout={"stack"}
                data={photos}
              />
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(ADDITEM)}
          style={styles.nextButton}
        >
          <Text style={styles.showOff}>Inspire{"\n\t"}the word... </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = (state) => ({
  photos: state.postReducer.photos,
});

const mapDispatchToProps = {
  addImage,
  removePhoto,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddImage);

{
  /* <View style={{ paddingBottom: 30 }}>
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
</Button> */
}

// let openImage = async () => {
//   let permission = await ImagePicker.requestCameraRollPermissionsAsync();

//   if (permission.granted === false) {
//     return;
//   }

//   let picker = await ImagePicker.launchImageLibraryAsync({
//     allowsEditing: true,
//     aspect: [4, 3],
//   });

//   if (picker.cancelled === true) {
//     return;
//   }
//   setSelectedImg({ localUri: picker.uri });
//   // console.log("picker", picker);
// };

// function handelAdding() {
//   if (selectImg) {
//     let filename = selectImg.localUri.split("/").pop();
//     // image type
//     let match = /\.(\w+)$/.exec(filename);
//     let type = match ? `image/${match[1]}` : `image`;

//     let uri;
//     if (Platform.OS === "ios") {
//       uri = selectImg.localUri.replace("file://", "");
//     } else {
//       uri = selectImg.localUri;
//     }

//     addImage({
//       uri: uri,
//       name: filename,
//       type,
//     });
//     setSelectedImg(null);
//   } else {
//     Alert.alert("Pick Image First");
//   }
// }
