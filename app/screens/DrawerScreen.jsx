// !TODO: https://reactnavigation.org/docs/drawer-navigator/ , use this link for implementing the custom drawer screen
import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import Colors from "../config/colors";
const DrawerScreen = (props) => {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DrawerItemList {...props} />
    </View>
  );
};
export default DrawerScreen;
