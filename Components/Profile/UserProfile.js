import React from "react";

import { Button, Container, Text, View } from "native-base";
import styles from "../Post/styles";
import {  Image} from "react-native";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import FeedList from "../Feed/FeedList";

const UserProfile = ({ logout, profile, navigation, route }) => {
  const { owner } = route.params;
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text>{owner}'s Profile</Text>
      </View>
      <View >
          <Image
            source={{
              uri:
                profile.image? profile.image : "https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
            }}
            style={{width: 100, height: 100, borderRadius: 200, alignSelf: "center"}}
          
          ></Image>
        </View>
      <FeedList feeds={profile.posts} navigation={navigation} />
      {/* <Button bordered dark>
        <Text>Follow</Text>
      </Button> */}
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state.profileReducer.userProfile);
  return {
    profile: state.profileReducer.userProfile,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
