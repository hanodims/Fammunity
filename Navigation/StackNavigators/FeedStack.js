import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { USER_PROFILE, FEED, POST_DETAIL, LIKERS } from "../screenNames";

//components
import Feed from "../../Components/Feed/Feed";
import PostDetail from "../../Components/Post/PostDetail";
import Likers from "../../Components/Post/Likers";
import UserProfile from "../../Components/Profile/UserProfile";

const { Navigator, Screen } = createStackNavigator();

// Config
import { tabScreenOptions } from "../options";

function FeedStack() {
  return (
    <Navigator screenOptions={tabScreenOptions} initialRouteName={FEED}>
      <Screen
        name={FEED}
        component={Feed}
        options={{
          headerShown: true,
          title: "My World",
          headerTitleStyle: {
            fontFamily: "Cochin",
            fontSize: 25,
          },
        }}
      />
      <Screen
        name={POST_DETAIL}
        component={PostDetail}
        options={{ headerShown: false }}
        // options={({ route }) => ({
        //   title: route.params.feed.owner.user.username,
        //   headerTitleStyle: {
        //     fontFamily: "Cochin",
        //     fontSize: 25,
        //   },
        // })}
      />
      <Screen
        name={LIKERS}
        component={Likers}
        // options={{ headerShown: false }}
      />
      <Screen
        name={USER_PROFILE}
        component={UserProfile}
        //options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default FeedStack;
