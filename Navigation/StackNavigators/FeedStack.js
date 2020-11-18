import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { FEEDLIST } from "../screenNames";
import FeedList from "../../Components/Feed/FeedList";

// Config
import { tabScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

function FeedStack() {
  return (
    <Navigator initialRouteName={FEEDLIST} screenOptions={tabScreenOptions}>
      <Screen name={FEEDLIST} component={FeedList} />
    </Navigator>
  );
}

export default FeedStack;
