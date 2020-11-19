import React from "react";
import { Icon } from "native-base";

// Screens
import { FEED, POST_ADDING } from "./screenNames";

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "#FFF",
  inactiveTintColor: "#000",
  style: {
    backgroundColor: "#000",
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
        //color = "white";
        break;

      default:
        return 0;
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});
