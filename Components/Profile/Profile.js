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
