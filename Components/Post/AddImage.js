import React from "react";
import { connect } from "react-redux";

import * as ImagePicker from "expo-image-picker";

//screens
import { ADDITEM, ADD_POST } from "../../Navigation/screenNames";

//actions
import { addImage, removePhoto } from "../../redux/actions";

//style
import Icon from "react-native-vector-icons/Feather";
import { Button, View } from "native-base";
import { ImageBackground, Text } from "react-native";
import styles from "./styles";
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
            name="x-circle"
            size={20}
            color="#000"
            onPress={() => removePhoto(item)}
          />
        </View>
      </View>
    );
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
        <Button
          rounded
          dark
          onPress={() => navigation.navigate(ADDITEM)}
          style={styles.nextButton}
        >
          <Text style={styles.showOff}>Inspire{"\n\t"}the word... </Text>
        </Button>
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
