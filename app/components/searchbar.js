import React, { Component } from "react";
import { TextInput } from "react-native";

const SearchBars = () => {
  const [value, changeText] = React.useState();

  return (
    <TextInput
      style={{
        padding: 4,
        borderRadius: 2,
      }}
      onChangeText={(text) => changeText(text)}
      placeholder="Start Searching"
      value={value}
    />
  );
};

export default SearchBars;
