import React, { useState } from "react";
import { connect } from "react-redux";

//style
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { Button, Card, View } from "native-base";
import { Alert, ImageBackground, Text } from "react-native";
import styles from "./styles";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

//screens
import { ADD_POST, FINISH_ADDING } from "../../Navigation/screenNames";

//actions
import { addItem, removeItem } from "../../redux/actions";

const AddItem = ({ addItem, navigation, items, removeItem }) => {
  var img =
    items.length == 0
      ? require("../../assets/add_items.png")
      : require("../../assets/white.png");

  const itemsList = items.map((item) => {
    //console.log("itemid", item.id);
    return (
      <View key={item.id} style={{}}>
        <Card>
          <Icon
            style={{ alignSelf: "flex-end" }}
            onPress={() => removeItem(item)}
            name="x-circle"
            size={20}
          />
          <Text key={item.name} style={styles.itemShow}>
            {item.name}
          </Text>
          <Text key={item.brand} style={styles.itemShow}>
            {item.brand} Prada
          </Text>
          <Text key={item.price} style={styles.itemShow}>
            {item.price} SR
          </Text>
        </Card>
      </View>
    );
  });
  const brands = [
    { value: 1, label: "Prada" },
    { value: 2, label: "Louis Vuitton" },
    { value: 3, label: "Zara" },
    { value: 4, label: "Dior" },
    { value: 5, label: "Dolce & Gabbana" },
  ];

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  function handelAdding() {
    if (brand != "" && price != "" && name != "") {
      addItem({ name: name, brand: brand, price: price, id: items.length + 1 });
      setName("");
      setPrice("");
      Alert.alert("Done");
      //console.log(items);
    } else Alert.alert("please fill all Fields");
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={img} style={{ flex: 1, resizeMode: "cover" }}>
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
              onPress={() => navigation.goBack(ADD_POST)}
            />
            <Text style={styles.AddTitleText}>Show the Word</Text>
          </View>
        </View>
        <View style={styles.itemsView}>
          <View style={styles.rect5Stack}>
            <View style={styles.itemDiv}>
              <Text style={styles.itemBrand}>
                Select the Brand of your item:
              </Text>

              <DropDownPicker
                searchable={true}
                searchablePlaceholder="Brand name or letters..."
                searchablePlaceholderTextColor="grey"
                seachableStyle={{ opacity: 1 }}
                searchableError={() => <Text>Not Found</Text>}
                items={brands}
                defaultValue={brand}
                containerStyle={{
                  height: 40,
                  opacity: 1,
                  width: 200,
                  alignSelf: "center",
                }}
                style={{ backgroundColor: "#fff", opacity: 1 }}
                itemStyle={{
                  justifyContent: "flex-start",
                  fontFamily: "Cochin",
                  opacity: 1,
                }}
                dropDownStyle={{
                  backgroundColor: "white",
                  opacity: 1,
                }}
                onChangeItem={(item) => setBrand(item.value)}
              />

              <Text style={styles.itemBrand}>Define it:</Text>
              <View style={{ width: 200, alignSelf: "center" }}>
                <TextInput
                  placeholder="Dress, Watch ..."
                  textBreakStrategy="highQuality"
                  placeholderTextColor="rgba(179,173,173,1)"
                  selectionColor="rgba(230, 230, 230,1)"
                  autoCapitalize="words"
                  value={name}
                  maxLength={250}
                  onChangeText={setName}
                ></TextInput>
              </View>
              <Text style={styles.itemBrand}>Price:</Text>
              <View style={{ width: 200, alignSelf: "center" }}>
                <TextInput
                  placeholder="33 SR ..."
                  textBreakStrategy="highQuality"
                  placeholderTextColor="rgba(179,173,173,1)"
                  selectionColor="rgba(230, 230, 230,1)"
                  autoCapitalize="words"
                  value={price}
                  onChangeText={setPrice}
                ></TextInput>
              </View>
            </View>
            <View style={styles.addItemButtonDiv}>
              <View style={styles.addPostIcon}>
                <Icon onPress={handelAdding} name="plus" size={20} />
              </View>
            </View>
          </View>

          <View style={styles.scrolItems}>
            <Text style={styles.AddTitleText}>Your items:</Text>
            <ScrollView horizontal={true}>{itemsList}</ScrollView>
          </View>
        </View>

        <Button
          rounded
          dark
          onPress={() => navigation.navigate(FINISH_ADDING)}
          style={styles.nextButton}
        >
          <Text style={styles.showOff}>Prepare for{"\n\t"}the show... </Text>
        </Button>
      </ImageBackground>
    </View>
  );
};
const mapStateToProps = (state) => ({
  items: state.postReducer.items,
});
const mapDispatchToProps = {
  addItem,
  removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
