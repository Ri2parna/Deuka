import React from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default function SearchScreen() {
  return (
    <View style={{ height: "100%" }}>
      <SearchBar style={{ marginTop: "8%" }} autoFocus />
    </View>
  );
}
