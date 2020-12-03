import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Config
import { tabBarOptions, tabScreenOptions } from "../options";

// Screens
import { FEED, POST_ADDING, USER, EXPLORE, TOPLIKED } from "../screenNames.js";

//stacks
import FeedStack from "./FeedStack";
import PostAddingStack from "./PostAddingStack";
import UserStack from "./UserStack";

import ExploreStack from "./ExploreStack";
import TopLiked from "../../Components/Feed/TopLiked";
import Profile from "../../Components/Profile/Profile";
import { PROFILE } from "../screenNames";

//import Profile from "../Components/Profile/Profile";
const { Navigator, Screen } = createBottomTabNavigator();

export default function TreeStack() {
  return (
    <Navigator
      initialRouteName={EXPLORE}
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      <Screen name={FEED} component={FeedStack} />
      <Screen name={TOPLIKED} component={TopLiked} />
      <Screen name={POST_ADDING} component={PostAddingStack} />
      <Screen name={EXPLORE} component={ExploreStack} />
      <Screen
        name={USER}
        component={UserStack}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
