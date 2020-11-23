import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { FEED_LIST, FEED, POST_DETAIL, LIKERS } from "../screenNames";

//components
import Feed from "../../Components/Feed/Feed";
import FeedList from "../../Components/Feed/FeedList";
import PostDetail from "../../Components/Post/PostDetail";
import Likers from "../../Components/Post/Likers";

const { Navigator, Screen } = createStackNavigator();

function FeedStack() {
  return (
    <Navigator initialRouteName={FEED}>
      <Screen name={FEED} component={Feed} options={{ headerShown: false }} />
      <Screen
        name={FEED_LIST}
        component={FeedList}
        options={{ headerShown: false }}
      />
      <Screen
        name={POST_DETAIL}
        component={PostDetail}
        options={{ headerShown: false }}
      />
      <Screen
        name={LIKERS}
        component={Likers}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default FeedStack;
