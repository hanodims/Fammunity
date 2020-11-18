import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";

import { Provider } from "react-redux";
import store from "./redux";

// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Container style={styles.container}>
          <RootNavigator />
        </Container>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
  },
});
