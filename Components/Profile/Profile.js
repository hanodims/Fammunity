import React from "react";
import { Text, View } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import Feed from "../Feed/Feed";
import LogoutButton from "./LogoutButton";

const Profile = ({ user, logout, name, profile }) => (
  <View>
    <Text>{name?.username}'s Profile</Text>
    <Feed />
    <LogoutButton logout={logout} />
  </View>
);

const mapStateToProps = (state) => {
  console.log("profile", state.profileReducer);
  console.log("user", state.user);
  return {
    profile: state.profileReducer.profile,
    name: state.profileReducer.name,
    user: state.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
