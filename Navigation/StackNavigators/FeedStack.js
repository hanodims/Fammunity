import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { FEEDLIST, FEED } from "../screenNames";
import Feed from "../../Components/Feed/Feed";
import FeedList from "../../Components/Feed/FeedList";

// Config
import { tabScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

function FeedStack() {
  return (
    <Navigator initialRouteName={FEED} screenOptions={tabScreenOptions}>
      <Screen name={FEED} component={Feed} options={{ headerShown: false }} />
      <Screen
        name={FEEDLIST}
        component={FeedList}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default FeedStack;
