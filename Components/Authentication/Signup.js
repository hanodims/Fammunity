import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { signup } from "../../redux/actions/authentication";

// Screen Names
import { LOGIN } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./Styles";

const Signup = ({ navigation, signup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Signup</Text>
      <TextInput
        style={styles.authTextInput}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => signup({ username, password }, navigation)}
      >
        <Text style={styles.authButtonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.authOther} onPress={() => navigation.replace(LOGIN)}>
        Click here to log in!
      </Text>
    </View>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);
