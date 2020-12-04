import React from "react";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = props => {
  return (
      <TextInput
        placeholder="description"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
  );
};

export default SearchBar;
