import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const screen = Dimensions.get("screen");

export default styles = StyleSheet.create({
  FeedDev: {
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  feedListImage: {
    width: 120,
    height: 120,
    margin: 2,
  },
  feedTitle: {
    color: "#000",
    fontSize: 30,
    lineHeight: 40,
    fontFamily: "Chalkboard SE",
  },
  AddPostDev: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  button: {
    width: 100,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  addPostIcon: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 60,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgb(210,169,223)",
    shadowOpacity: 40,
    shadowOffset: {
      height: 1,
    },
  },
  addFirsttIcon: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 60,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#999",
    shadowOpacity: 40,

    shadowOffset: {
      height: 1,
    },
  },
  iconDev: {
    marginLeft: windowWidth - 50,
    marginTop: -30,
    marginBottom: 30,
  },

  description: {
    fontFamily: "Chalkboard SE",
    fontSize: 18,
    color: "#121212",
    height: 124,
    width: 272,
  },
  itemsContainer: {
    width: 410,
    height: 300,
  },
  itemsView: {
    width: windowWidth - 20,
    height: windowHeight - 340,
    marginTop: 20,
    alignSelf: "center",
  },
  itemDiv: {
    top: 0,
    width: 348,
    height: 275,
    position: "absolute",
    backgroundColor: "#fff",
    left: 0,
    borderRadius: 15,
  },
  rect5Stack: {
    width: 348,
    height: 275,
    marginTop: 23,
    marginLeft: 20,

    borderWidth: 0,
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: "rgb(210,169,223)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
  },
  addItemButtonDiv: {
    top: 235,
    left: 257,
    width: 70,
    height: 54,
    position: "absolute",
  },

  scrolItems: {
    width: 348,
    height: 219,
    marginTop: windowHeight / 30,
    marginLeft: 20,
  },
  scrolItemsContent: {
    height: 219,
    width: 348,
    justifyContent: "center",
    alignItems: "center",
  },
  itemShow: {
    fontFamily: "Chalkboard SE",
    fontSize: 20,
    color: "#121212",
    height: 40,
    width: 300,
    marginLeft: 21,
    marginBottom: 0,
    marginTop: 0,
  },

  itemBrand: {
    fontFamily: "Cochin",
    fontSize: 20,
    color: "#121212",
    height: 40,
    width: 300,
    //marginTop: 49,
    marginLeft: 21,
    marginBottom: 2,
    marginTop: 4,
  },
  rect5: {
    marginTop: -40,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 60,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    shadowColor: "rgb(210,169,223)",
    shadowOpacity: 40,
    marginBottom: 5,
    shadowOffset: {
      height: 1,
    },
  },
  itemPrice: {
    fontFamily: "Chalkboard SE",
    fontSize: 20,
    color: "#121212",
    height: 20,
    width: 300,
    marginLeft: 21,
  },
  doneDive: {
    width: 44,
    height: 44,
    marginTop: 17,
    marginLeft: 184,
  },
  cupertinoButtonDelete: {
    height: 44,
    width: 44,
  },
  addPost: {
    fontFamily: "Cochin",
    color: "#121212",
    height: 42,
    width: 204,
    fontSize: 30,
    textAlign: "left",
    marginTop: windowHeight / 4 - 100,
    marginLeft: 50,
    //borderWidth: 1,
  },
  startPostButtonDiv: {
    width: 170,
    height: 57,
    // borderWidth: 1,
    // borderColor: "rgba(255,255,255,1)",
    // borderRadius: 44,
    marginTop: windowHeight - 180,
    marginLeft: 121,
    // borderWidth: 1,
    // borderColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  showOff: {
    fontFamily: "Cochin",
    color: "white",
    textAlign: "center",
    width: 144,
    height: 38,
    fontWeight: "bold",
    fontSize: 16,
    // marginTop: 9,
    // marginLeft: 12,
  },
  addImageContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  AddTitleDiv: {
    width: 389,
    height: 83,
    //backgroundColor: "#E6E6E6",
    marginTop: 43,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 70,
  },
  AddTitleRow: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: 135,
    marginLeft: 12,
    marginTop: 20,
  },
  AddTitleText: {
    fontFamily: "Papyrus",
    color: "#121212",
    height: 42,
    width: 204,
    fontSize: 30,
    textAlign: "left",
    marginLeft: 4,
  },
  showPhotos: {
    shadowColor: "#e2b4e4",
    borderRadius: 50,
    // shadowOpacity: 40,
    // marginBottom: 5,
    // shadowOffset: {
    //   height: 4,
    // },
    width: 388,
    height: 570,
    //backgroundColor: "#E6E6E6",
    marginTop: 12,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    width: 170,
    height: 57,
    // borderWidth: 1,
    // borderColor: "rgba(255,255,255,1)",
    // borderRadius: 44,
    marginTop: 0,
    marginLeft: 121,
    // borderWidth: 1,
    // borderColor: "#121212",
    alignContent: "flex-start",
    justifyContent: "center",
  },
  removeItemButton: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 60,
    width: 21,
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#999",
    shadowOpacity: 40,
    shadowOffset: {
      height: 1,
    },
    marginLeft: 30,
    marginLeft: 300,
    marginTop: -460,
  },
});
