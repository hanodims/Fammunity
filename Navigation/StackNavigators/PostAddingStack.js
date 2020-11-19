import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { ADD_POST, ADDIMAGE, ADDITEM } from "../screenNames";
import AddPost from "../../Components/Post/AddPost";
import AddImage from "../../Components/Post/AddImage";
import AddItem from "../../Components/Post/AddItem";

// Config
import { tabScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

function PostAddingStack() {
  return (
    <Navigator initialRouteName={ADD_POST} screenOptions={tabScreenOptions}>
      <Screen
        name={ADD_POST}
        component={AddPost}
        options={{ headerShown: false }}
      />
      <Screen name={ADDIMAGE} component={AddImage} />
      <Screen name={ADDITEM} component={AddItem} />
    </Navigator>
  );
}

export default PostAddingStack;
