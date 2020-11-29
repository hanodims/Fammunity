import React from "react";
import { Icon } from "native-base";
//import Icon from "react-native-vector-icons/AntDesign";

// Screens
import { EXPLORE, FEED, POST_ADDING, USER } from "./screenNames";

export const tabBarOptions = {
  showLabel: true,
  activeTintColor: "#111",
  inactiveTintColor: "grey",
  style: {
    backgroundColor: "transparent",
  },
};
export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName = "";
    switch (route.name) {
      case FEED:
        iconName = "grid";
        // color = "black";
        break;

      case POST_ADDING:
        iconName = "star-half";
        // color = "black";
        break;

      case USER:
        iconName = "account";
        // color = "black";
        break;

      case EXPLORE:
        iconName = "earth";
        // color = "black";
        break;

      default:
        return 0;
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});
