import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { PROFILE } from "../screenNames";
import Profile from "../../Components/Profile/Profile";

// Config
import { tabScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

function UserStack() {
  return (
    <Navigator initialRouteName={PROFILE} >
      <Screen name={PROFILE} component={Profile} />
    </Navigator>
  );
}

export default UserStack;
