import React from "react";
import { Icon } from "native-base";
//import Icon from "react-native-vector-icons/Feather";

// Screens
import { FEED, POST_ADDING, USER } from "./screenNames";

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "red",
  inactiveTintColor: "black",
  style: {
    backgroundColor: "#111",
  },
};
export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName = "";
    switch (route.name) {
      case FEED:
        iconName = "grid";
        color = "white";
        break;

      case POST_ADDING:
        iconName = "star-half";
        color = "white";
        break;

      case USER:
        iconName = "account";
        color = "white";
        break;

      default:
        return 0;
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});
