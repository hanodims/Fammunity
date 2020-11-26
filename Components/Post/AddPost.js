import React, { useState } from "react";
import { connect } from "react-redux";

//screens
import { ADDIMAGE } from "../../Navigation/screenNames";
import { ADDITEM } from "../../Navigation/screenNames";

//style
import { Button, Container, View, Icon } from "native-base";
import { Text, Alert, ImageBackground } from "react-native";
import styles from "./styles";
import { color } from "react-native-reanimated";
import Carousel from "react-native-snap-carousel";
import * as ImagePicker from "expo-image-picker";

//actions
import { addPost, removePhoto, addImage } from "../../redux/actions";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import AddItem from "./AddItem";
// import Icon from "react-native-vector-icons/Feather";

const AddPost = ({
  navigation,
  items,
  photos,
  addPost,
  removePhoto,
  addImage,
}) => {
  const [description, setDescription] = useState("");
  console.log(photos.length);
  console.log(items.length);

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

  function handelRemoving(index, item) {
    removePhoto(item);
    console.log(index, index);
  }

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
  function renderPhotos({ item, index }) {
    //console.log("item, index ", item, index);
    return (
      <View style={{ width: 300, height: 346 }}>
        <ImageBackground
          source={{ uri: item.uri }}
          style={{ width: 292, height: 300, borderRadius: 15 }}
          imageStyle={{ borderRadius: 15 }}
          resizeMode="cover"
        ></ImageBackground>
        <Icon name="remove" onPress={() => handelRemoving(index, item)} />
      </View>
    );
  }

  return (
    <Container style={{ flex: 1 }}>
      <View style={{ paddingBottom: 20, alignItems: "center" }}>
        <Text style={styles.feedTitle}>Add post</Text>
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        {photos.length > 0 && (
          <View style={styles.iconDev}>
            <View style={styles.addPostIcon}>
              <Icon name="image" size="30" onPress={openImage}></Icon>
            </View>
            {/* <View style={styles.addPostIcon}>
            <Icon
              name="add"
              size="30"
              onPress={() => navigation.navigate(ADDITEM)}
            ></Icon>
          </View> */}
          </View>
        )}

        <View style={{ width: 272, height: 124 }}>
          <TextInput
            placeholderTextColor="#A6AEC1"
            value={description}
            onChangeText={setDescription}
            style={styles.description}
            placeholder="How did u look today?"
            textBreakStrategy="highQuality"
            selectionColor="rgba(74,7,7,1)"
            autoCapitalize="sentences"
            maxLength={300}
            numberOfLines={4}
            multiline={true}
          ></TextInput>
        </View>
        <View></View>
      </View>

      <View
        style={{
          width: 358,
          height: 346,
          alignSelf: "center",
        }}
      >
        {photos.length == 0 && (
          <View style={styles.addFirsttIcon}>
            <Icon name="image" size="30" onPress={openImage}></Icon>
          </View>
        )}
        {photos.length > 0 && (
          <View>
            <Carousel
              renderItem={renderPhotos}
              sliderWidth={350}
              itemWidth={350}
              layout={"stack"}
              data={photos}
            />
          </View>
        )}
      </View>
      {/* {items.length > 0 && (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.feedTitle}> Edit items</Text>
        </View>
      )} */}

      <ScrollView horizontal={false} style={styles.itemsContainer}>
        <View style={styles.itemsView}>
          <AddItem navigation={navigation} />
        </View>
      </ScrollView>
      <View style={styles.doneDive}>
        <Text onPress={handelAddPost}>Done</Text>
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
  removePhoto,
  addImage,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
//onPress={() => handelAddPost()}

{
  /* <View style={styles.itemsView}>
<View style={styles.itemDiv}>
  <TextInput
    placeholder="Prad, Dior ..."
    textBreakStrategy="highQuality"
    placeholderTextColor="rgba(179,173,173,1)"
    selectionColor="rgba(230, 230, 230,1)"
    autoCapitalize="words"
    style={styles.itemName}
  ></TextInput>
  <View style={styles.brandDive}>
    <TextInput
      placeholder="Dress, Watch ..."
      textBreakStrategy="highQuality"
      placeholderTextColor="rgba(179,173,173,1)"
      selectionColor="rgba(230, 230, 230,1)"
      autoCapitalize="words"
      style={styles.itemBrand}
      // value={name}
      // onChangeText={setName}
    ></TextInput>
    <View style={styles.rect5}></View>
  </View>
  <TextInput
    placeholder="33 SR ..."
    textBreakStrategy="highQuality"
    placeholderTextColor="rgba(179,173,173,1)"
    selectionColor="rgba(230, 230, 230,1)"
    autoCapitalize="words"
    style={styles.itemPrice}
    // value={price}
    // onChangeText={setPrice}
  ></TextInput>
</View>
</View> */
}
