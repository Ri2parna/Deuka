// !TODO: https://reactnavigation.org/docs/drawer-navigator/ , use this link for implementing the custom drawer screen
import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import Screen from "../components/Screen";
import Colors from "../config/colors";
const DrawerScreen = (props) => {
  return (
    <Screen>
      <DrawerItem label="Help" />
      <DrawerItemList {...props} />
    </Screen>
  );
};
export default DrawerScreen;
