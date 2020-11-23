import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import { LOGIN, SIGNUP, PROFILE } from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";

// Config
import { tabScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

function UserStack() {
  return (
    <Navigator
      initialRouteName={user ? PROFILE : LOGIN}
      screenOptions={tabScreenOptions}
    >
      {user ? (
        <Screen name={PROFILE} component={Profile} />
      ) : (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
}

export default connect(mapStateToProps)(UserStack);
