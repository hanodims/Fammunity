import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { ADD_POST, ADDIMAGE, ADDITEM, FINISH_ADDING } from "../screenNames";
import AddPost from "../../Components/Post/AddPost";
import AddImage from "../../Components/Post/AddImage";
import AddItem from "../../Components/Post/AddItem";

// Config
import { tabScreenOptions } from "../options";
import FinishAdding from "../../Components/Post/FinishAdding";

const { Navigator, Screen } = createStackNavigator();

function PostAddingStack() {
  return (
    <Navigator screenOptions={tabScreenOptions} initialRouteName={ADD_POST}>
      <Screen
        name={ADD_POST}
        component={AddPost}
        options={{ headerShown: false }}
      />
      <Screen
        name={ADDIMAGE}
        component={AddImage}
        options={{ headerShown: false }}
      />
      <Screen
        name={ADDITEM}
        component={AddItem}
        options={{ headerShown: false }}
      />
      <Screen
        name={FINISH_ADDING}
        component={FinishAdding}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default PostAddingStack;
