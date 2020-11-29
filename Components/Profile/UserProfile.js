import React from "react";

import { Container, View } from "native-base";
import styles from "../Post/styles";
import { Image } from "react-native";

// Components
import FeedList from "../Feed/FeedList";
import Follow from "./Follow";

const UserProfile = ({ navigation, route }) => {
  const { owner, profile } = route.params;

  return (
    <Container style={{ flex: 1, paddingTop: 100 }}>
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

export default UserProfile;
