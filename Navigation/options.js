import React from "react";
//import { Icon } from "native-base";
import Icon from "react-native-vector-icons/Feather";
//import { Ionicons } from "@expo/vector-icons";

// Screens
import {
  EXPLORE,
  FEED,
  LOGIN,
  POST_ADDING,
  PROFILE,
  SIGNUP,
  TOPLIKED,
  TREESTACK,
  USER,
} from "./screenNames";

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "#111",
  inactiveTintColor: "grey",
  style: {
    backgroundColor: "#fff",
  },
};
export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName = "";
    switch (route.name) {
      case FEED:
        iconName = "grid";
        size = 25;
        // color = "black";
        break;

      case POST_ADDING:
        iconName = "plus-circle";
        //color = "#809FA2";
        color = "black";
        size = 45;

        break;

      case USER:
        iconName = "user";
        size = 25;
        // color = "black";
        break;

      case TOPLIKED:
        iconName = "star";
        size = 25;
        // color = "black";
        break;

      case EXPLORE:
        iconName = "globe";
        size = 25;
        // color = "black";
        break;

      // break;
      case LOGIN:
        iconName = "globe";
        size = 25;
        // color = "black";
        break;
      case SIGNUP:
        iconName = "globe";
        size = 25;
        // color = "black";
        break;

      default:
        return 0;
    }
    return (
      <Icon
        name={iconName}
        size={size}
        type="MaterialCommunityIcons"
        style={{ color }}
      />
    );
  },
});
