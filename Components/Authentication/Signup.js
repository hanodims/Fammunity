import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { signup } from "../../redux/actions";

// Screen Names
import { LOGIN } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";


const Signup = ({ navigation, signup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text >Signup</Text>
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
        onPress={() => signup({ username, password }, navigation)}
      >
        <Text>Sign up</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.replace(LOGIN)}>
        Click here to log in!
      </Text>
    </View>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);
