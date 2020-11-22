import React from "react";
import { connect } from "react-redux";

//style
import { Container } from "native-base";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

const Profile = () => {
  return (
    <Container>
      <View>
        <Image
          style={{ width: 600, height: 600 }}
          source={{
            uri:
              "https://planetfashion.imgix.net/resources/img/planet_fashion/PF_D_S2_aboutUs.jpg",
          }}
          resizeMode="center"
        ></Image>
      </View>
    </Container>
  );
};

export default Profile;
