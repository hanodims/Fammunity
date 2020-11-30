import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const SwiperComponent = ({post}) => {
  const imgList = post.photos.map((item) => {
    return (
      
      <View style={styles.slide} key={item.id}>
      <Image
        source={{ uri: item.image }}
        style={{
          marginLeft: 50,
          marginBottom: 210,
          height: "70%",
          width: "70%" ,
          marginTop: 100,
          resizeMode: "stretch",
        }}
      />
    </View>
    );
  });
  return (
    <Swiper
      style={StyleSheet.wrapper}
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 5,
        borderRadius: 10,
        backgroundColor: "#FFF",
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        marginTop: -200,
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: "#FFF",
        activeDotColor: "#FFF",
      }}
    >
     {imgList}
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
export default SwiperComponent;
