/*import React from "react";
import { connect } from "react-redux";

//style
import { Container } from "native-base";
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";


const Profile = () => {
  return (
    <Container>
      <View >
      <View >
      <View>

        <Image
          style={{ width: 600, height: 600 }}
          source={{
            uri:
              "https://planetfashion.imgix.net/resources/img/planet_fashion/PF_D_S2_aboutUs.jpg",
          }}
          resizeMode="center"
        ></Image>

          <Image source={{uri:"https://planetfashion.imgix.net/resources/img/planet_fashion/PF_D_S2_aboutUs.jpg"}} resizeMode="center" style={{width: 200, height: 500}}></Image>
      </View>

      </View>
        <Text>Fammunity</Text>

      </View>
    </Container>
  );
};

export default (Profile);*/

import React from "react";
import { Text, View } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import LogoutButton from "./LogoutButton";


const Profile = ({ user, logout, name, profile }) => (
  <View>
    <Text>{name?.username}'s Profile</Text>
    <LogoutButton logout={logout} />
  </View>
);

const mapStateToProps = (state) => {
  console.log("profile", state.profile);
  return {
    profile: state.profile.profile,
    name: state.profile.name,
    user: state.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
 