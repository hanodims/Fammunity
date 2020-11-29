import React, { useState } from "react";
import { connect } from "react-redux";

import { View, Text } from "native-base";
import { ImageBackground } from "react-native";
import { ADDITEM } from "../../Navigation/screenNames";
import Icon from "react-native-vector-icons/Feather";

const FinishAdding = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/white.png")}
        style={{ flex: 1, resizeMode: "cover" }}
      >
        <View style={styles.AddTitleDiv}>
          <View style={styles.AddTitleRow}>
            <Icon
              style={{
                width: 34,
                height: 28,
                marginTop: 9,
              }}
              name="arrow-left"
              size={20}
              onPress={() => navigation.goBack(ADDITEM)}
            />
            <Text style={styles.AddTitleText}>Let's Catwalk..</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FinishAdding;
