import React from "react";
import { Text, View } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Components
import LogoutButton from "./LogoutButton";

const Profile = ({ user, logout }) => (
  <View>
    <Text>{user?.username}'s Profile</Text>
    <LogoutButton logout={logout} />
  </View>
);

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);