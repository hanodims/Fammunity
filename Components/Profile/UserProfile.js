import React from "react";

import { Button, Container, Text, View } from "native-base";
import styles from "../Post/styles";
import { Image } from "react-native";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import FeedList from "../Feed/FeedList";

const UserProfile = ({ username, navigation, route }) => {
  const { owner, profile } = route.params;

  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text>{owner}'s Profile</Text>
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
        {username != owner && (
          <Button bordered dark>
            <Text>Follow</Text>
          </Button>
        )}
      </View>
      <FeedList feeds={profile.posts} navigation={navigation} />
    </Container>
  );
};
const mapStateToProps = (state) => ({
  username: state.profileReducer.name.username,
});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
