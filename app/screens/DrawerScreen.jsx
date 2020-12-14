// !TODO: https://reactnavigation.org/docs/drawer-navigator/ , use this link for implementing the custom drawer screen
import React from "react";
import { View, Text, StatusBar } from "react-native";
const DrawerScreen = ({ navigation, ...props }) => {
  return (
    <View>
      <View style={{ height: StatusBar.currentHeight }}></View>
      <View style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Text>This is a the list of drawer items</Text>
        <Text>{1 && `${props}`}</Text>
      </View>
    </View>
  );
};
export default DrawerScreen;
