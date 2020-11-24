import React from "react";
import { Image } from "react-native";
import { Button, Container, Text, View } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import FeedList from "../Feed/FeedList";
import LogoutButton from "./LogoutButton";

const Profile = ({ logout, name, profile, navigation }) => {
  //console.log("profile.posts", profile.posts);
  return (
    <Container style={styles.FeedDev}>
      <View style={{ padding: 30 }}>
        <Text>{name?.username}'s Profile</Text>
      </View>
      <View>
        <Image
          source={{
            uri: profile.image
              ? profile.image
              : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 200,
            alignSelf: "center",
          }}
        ></Image>
      </View>

      <View style={{ padding: 20 }}>
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
