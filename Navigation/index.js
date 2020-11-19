import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

// Screens
import { FEED, POST_ADDING, EXPLORE, USER } from "./screenNames.js";

//stacks
import FeedStack from "./StackNavigators/FeedStack";
import PostAddingStack from "./StackNavigators/PostAddingStack";

const { Navigator, Screen } = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={FEED}
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      {/* <Screen name={USER} /> */}
      <Screen name={FEED} component={FeedStack} />
      <Screen name={POST_ADDING} component={PostAddingStack} />
    </Navigator>
  );
}
