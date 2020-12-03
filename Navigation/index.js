import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

// Screens
import {
  FEED,
  POST_ADDING,
  USER,
  EXPLORE,
  TOPLIKED,
  LOGIN,
  SIGNUP,
  TREESTACK,
} from "./screenNames.js";

//stacks
import FeedStack from "./StackNavigators/FeedStack";
import PostAddingStack from "./StackNavigators/PostAddingStack";
import UserStack from "./StackNavigators/UserStack";

import ExploreStack from "./StackNavigators/ExploreStack";
import TopLiked from "../Components/Feed/TopLiked";
import TreeStack from "./StackNavigators/TreeStack";
import { connect } from "react-redux";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

//import Profile from "../Components/Profile/Profile";
const { Navigator, Screen } = createStackNavigator();

function RootTabNavigator({ user }) {
  return (
    <Navigator
      initialRouteName={user ? TREESTACK : LOGIN}
      screenOptions={tabScreenOptions}
    >
      {user ? (
        <>
          <Screen
            name={TREESTACK}
            component={TreeStack}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false, tabBarVisible: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false, tabBarVisible: false }}
          />
        </>
      )}
    </Navigator>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(RootTabNavigator);
