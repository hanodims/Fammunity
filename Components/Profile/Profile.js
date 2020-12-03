import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, Container, Text, View, Icon } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";
import { Ionicons } from "@expo/vector-icons";

// Components
import FeedList from "../Feed/FeedList";
import { LIKED_FEEDS } from "../../Navigation/screenNames";

const Profile = ({ logout, name, profile, navigation }) => {
  //console.log("profile.posts", profile.posts);
  return (
    <Container style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <View style={styles.statsBoxTitle}>
            <Ionicons
              name="md-heart"
              size={24}
              color="black"
              onPress={() => navigation.navigate(LIKED_FEEDS)}
            ></Ionicons>

            <Text style={[styles.text, styles.subText]}>Liked</Text>
          </View>
        </View>
        <Ionicons name="md-heart" size={24} color="white"></Ionicons>

        <View>
          <View style={styles.statsBoxTitle}>
            <Ionicons
              name="md-log-out"
              size={24}
              color="red"
              onPress={logout}
            ></Ionicons>
            <Text style={[styles.text, styles.subText]}>Log out</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 30 }]}>
          {name?.username}
        </Text>
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
            resizeMode: "cover",
          }}
        ></Image>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 18 }]}>
            {profile?.posts?.length}
          </Text>
          <Text style={[styles.text, styles.subText]}>Posts</Text>
        </View>
        <View
          style={[
            styles.statsBox,
            { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 },
          ]}
        >
          <Text style={[styles.text, { fontSize: 18 }]}>45</Text>
          <Text style={[styles.text, styles.subText]}>Followers</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 18 }]}>30</Text>
          <Text style={[styles.text, styles.subText]}>Following</Text>
        </View>
      </View>

      <FeedList feeds={profile.posts} navigation={navigation} />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  statsBoxTitle: {
    alignItems: "center",
    flex: 1,
  },
});

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
