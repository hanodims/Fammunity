import React, { useState } from "react";
import { connect } from "react-redux";

//style
import { Button, Container, Icon, Picker, View } from "native-base";
import { Text } from "react-native";
import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const AddItem = () => {
  const [items, setItem] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");
  console.log({ items });
  return (
    <Container style={styles.FeedDev}>
      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.feedTitle}>Add Item</Text>
      </View>
      <View>
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
        <Picker
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
        </Picker>
        <TouchableOpacity
          onPress={() =>
            setItem([
              ...items,
              { name: name, brand: brand, price: price, size: size },
            ])
          }
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

// const mapDispatchToProps = {
//   pass,
// };

// export default connect(null, mapDispatchToProps)(AddPost);
export default AddItem;

// <Text style={styles.authOther} onPress={() => navigation.replace(SIGNUP)}>
// Click here to register!
// </Text>
