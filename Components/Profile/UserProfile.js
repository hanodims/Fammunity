import React, { useState } from "react";

import { Button, Container, Text, View } from "native-base";
import styles from "../Post/styles";
import { Alert, Image } from "react-native";

// Redux
import { connect } from "react-redux";
import { followProfile } from "../../redux/actions";

// Components
import FeedList from "../Feed/FeedList";
import Follow from "./Follow";

const UserProfile = ({ username, navigation, route, followProfile }) => {
  const { owner, profile } = route.params;

  return (
    <Container style={styles.FeedDev}>
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
      <View>
        <Follow owner={owner} profile={profile} />
      </View>
      <FeedList feeds={profile.posts} navigation={navigation} />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  username: state.profileReducer.name.username,
});
const mapDispatchToProps = {
  followProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
