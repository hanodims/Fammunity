import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#000000",
    marginTop: 5,
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    textAlign: "center",
  },
  authButtonText: {
    color: "#fff",
    fontSize: 20,
    height: 40,
    paddingTop: 5,
  },
  authContainer: {
    alignItems: "center",
    paddingRight: 80,
    paddingLeft: 80,
    paddingTop: 550,
  },
  authOther: {
    color: "black",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "center",
    height: 40,
    marginBottom: 7,
    color: "#000",
    borderColor: "#777",
    borderRadius: 20,
    borderWidth: 1,
  },
  authTitle: {
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "rgb(20,90,100)",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "rgb(20,90,100)",
    fontSize: 16,
  },
});

export default styles;
