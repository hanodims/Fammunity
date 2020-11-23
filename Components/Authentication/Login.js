import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { login } from "../../redux/actions";

// Screen Names
import { SIGNUP } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

const Login = ({ navigation, login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View >
      <Text >Login</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        
        onPress={() => login({ username, password }, navigation)}
      >
        <Text >Log in</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.replace(SIGNUP)}>
        Click here to register!
      </Text>
    </View>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
