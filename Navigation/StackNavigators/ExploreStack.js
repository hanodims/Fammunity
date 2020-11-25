import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { USER_PROFILE, EXPLORE, POST_DETAIL, LIKERS } from "../screenNames";

//components
import Explore from "../../Components/Feed/Explore";
import PostDetail from "../../Components/Post/PostDetail";
import Likers from "../../Components/Post/Likers";
import UserProfile from "../../Components/Profile/UserProfile";

const { Navigator, Screen } = createStackNavigator();

// Config
import { tabScreenOptions } from "../options";

function ExploreStack() {
  return (
    <Navigator screenOptions={tabScreenOptions} initialRouteName={EXPLORE}>
      <Screen
        name={EXPLORE}
        component={Explore}
        options={{ headerShown: false }}
      />
      <Screen
        name={POST_DETAIL}
        component={PostDetail}
        // options={{ headerShown: false }}
      />
      <Screen
        name={LIKERS}
        component={Likers}
        // options={{ headerShown: false }}
      />
      <Screen
        name={USER_PROFILE}
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default ExploreStack;
