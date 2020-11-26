import React, { useState } from "react";
import { connect } from "react-redux";

//style
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { Button, Container, Picker, View } from "native-base";
import { Alert, Text } from "react-native";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

//screens
import { ADD_POST } from "../../Navigation/screenNames";

//actions
import { addItem } from "../../redux/actions";

const AddItem = ({ addItem, navigation }) => {
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
      addItem({ name: name, brand: brand, price: price });
      setName("");
      setPrice("");
      Alert.alert("Done");
    } else Alert.alert("please fill all Fields");
  }
  return (
    <View style={styles.itemDiv}>
      <TextInput
        placeholder="Prad, Dior ..."
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(179,173,173,1)"
        selectionColor="rgba(230, 230, 230,1)"
        autoCapitalize="words"
        style={styles.itemBrand}
        value={brand}
        onChangeText={setBrand}
      ></TextInput>

      <TextInput
        placeholder="Dress, Watch ..."
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(179,173,173,1)"
        selectionColor="rgba(230, 230, 230,1)"
        autoCapitalize="words"
        style={styles.itemName}
        value={name}
        onChangeText={setName}
      ></TextInput>

      <TextInput
        placeholder="33 SR ..."
        textBreakStrategy="highQuality"
        placeholderTextColor="rgba(179,173,173,1)"
        selectionColor="rgba(230, 230, 230,1)"
        autoCapitalize="words"
        style={styles.itemPrice}
        value={price}
        onChangeText={setPrice}
      ></TextInput>
      <View style={styles.rect5}>
        <Icon onPress={handelAdding} name="plus" size="20" />
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(AddItem);
{
  /* <DropDownPicker
          searchable={true}
          searchablePlaceholder="Search for an item"
          searchablePlaceholderTextColor="gray"
          seachableStyle={{}}
          searchableError={() => <Text>Not Found</Text>}
          items={brands}
          defaultValue={brand}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => setBrand(item.value)}
        />

        <Button style={styles.button} onPress={handelAdding}>
          <Text>Add</Text>
        </Button>

        <Button
          rounded
          bordered
          dark
          style={styles.button}
          onPress={() => navigation.goBack(ADD_POST)}
        >
          <Text>Done</Text>
        </Button> */
}
