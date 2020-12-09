import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { login } from "../../redux/actions/authentication";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Screen Names
import { SIGNUP } from "../../Navigation/screenNames";

// Styling Components
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "native-base";
import styles from "./Styles";

const Login = ({ navigation, login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/m5.png")}
      style={{ flex: 1, resizeMode: "cover"}}
    >
      <View style={styles.authContainer}>
        {/* <Text style={styles.authTitle}>Login</Text> */}
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#777"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#777"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => login({ username, password }, navigation)}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(SIGNUP)}
        >
          Click here to register!
        </Text>
      </View>
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
