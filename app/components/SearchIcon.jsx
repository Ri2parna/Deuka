import * as React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const SearchIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Search");
      }}
      style={{ paddingRight: 20 }}
    >
      <EvilIcons name="search" size={32} color="black" />
    </TouchableOpacity>
  );
};
