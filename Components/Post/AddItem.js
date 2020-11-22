import React, { useState } from "react";
import { connect } from "react-redux";

//style
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { Button, Container, Picker, View } from "native-base";
import { Text } from "react-native";
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
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");

  function handelAdding() {
    addItem({ name: name, brand: brand, price: price, size: size });
    setName("");
    setPrice("");
    setSize("");
  }
  return (
    <Container style={styles.AddPostDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Add Item</Text>
      </View>
      <View style={{ width: 300 }}>
        <TextInput
          placeholder="Blouse, Skirt ..."
          placeholderTextColor="#A6AEC1"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="20.00"
          placeholderTextColor="#A6AEC1"
          value={price}
          onChangeText={setPrice}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="XL"
          placeholderTextColor="#A6AEC1"
          value={size}
          onChangeText={setSize}
          autoCapitalize="none"
        />

        <DropDownPicker
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
          onPress={() => navigation.replace(ADD_POST)}
        >
          <Text>Done</Text>
        </Button>
      </View>
    </Container>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(AddItem);

// <Text style={styles.authOther} onPress={() => navigation.replace(SIGNUP)}>
// Click here to register!
// </Text>

{
  /* <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-down" />}
        placeholder="Brand"
        placeholderStyle={{ color: "#bfc6ea" }}
        placeholderIconColor="#007aff"
        style={{ width: undefined }}
        selectedValue={brand}
        onValueChange={setBrand.bind()}
      >
        <Picker.Item label="Prada" value="key0" />
        <Picker.Item label="Louis Vuitton" value="key1" />
        <Picker.Item label="Zara" value="key2" />
        <Picker.Item label="Dior" value="key3" />
        <Picker.Item label="Dolce & Gabbana" value="key4" />
      </Picker> */
}
