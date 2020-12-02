import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

// Screens
import { FEED, POST_ADDING, USER, EXPLORE, TOPLIKED } from "./screenNames.js";

//stacks
import FeedStack from "./StackNavigators/FeedStack";
import PostAddingStack from "./StackNavigators/PostAddingStack";
import UserStack from "./StackNavigators/UserStack";

import ExploreStack from "./StackNavigators/ExploreStack";
import TopLiked from "../Components/Feed/TopLiked";

//import Profile from "../Components/Profile/Profile";
const { Navigator, Screen } = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={FEED}
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      <Screen name={FEED} component={FeedStack} />
      <Screen name={TOPLIKED} component={TopLiked} />
      <Screen name={POST_ADDING} component={PostAddingStack} />
      <Screen name={EXPLORE} component={ExploreStack} />
      <Screen name={USER} component={UserStack} />
    </Navigator>
  );
}
