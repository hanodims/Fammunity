import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import {
  LOGIN,
  SIGNUP,
  PROFILE,
  POST_DETAIL,
  LIKED_FEEDS,
} from "../screenNames";
import Profile from "../../Components/Profile/Profile";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import PostDetail from "../../Components/Post/PostDetail";
import LikedFeeds from "../../Components/Feed/LikedFeeds";

// Config
import { tabScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={user ? PROFILE : LOGIN}
      screenOptions={tabScreenOptions}
    >
      <Screen
        name={PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />

      <Screen
        name={POST_DETAIL}
        component={PostDetail}
        options={{ headerShown: false }}
      />
      <Screen
        name={LIKED_FEEDS}
        component={LikedFeeds}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(UserStack);
