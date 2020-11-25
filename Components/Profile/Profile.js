import React from "react";

import { Button, Container} from "native-base";

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";


// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import FeedList from "../Feed/FeedList";
import LogoutButton from "./LogoutButton";


const Profile = ({ logout, name, profile, navigation }) => {

  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={{ alignSelf: "center"}}>{name?.username}</Text>
        <View >
          <Image
            source={{
              uri:
                profile.image? profile.image : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
            }}
            style={{width: 100, height: 100, borderRadius: 200, alignSelf: "center"}}
          
          ></Image>
        </View>
        <Text style={{ alignSelf: "center"}}>{profile.folowers}</Text>

      </View>
      <View style={{ paddingBottom: 30 }}>
        <Button bordered dark>
          <Text>Liked</Text>
        </Button>
      </View>

      <FeedList feeds={profile.posts} navigation={navigation} />
      <LogoutButton logout={logout} />
    </Container>
  );
};

const mapStateToProps = (state) => {

  return {
    profile: state.profileReducer.profile,
    name: state.profileReducer.name,
  };
};

const mapDispatchToProps = {
  logout,
  
};



export default connect(mapStateToProps, mapDispatchToProps)(Profile);
