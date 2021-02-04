// !TODO: https://reactnavigation.org/docs/drawer-navigator/ , use this link for implementing the custom drawer screen
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import Colors from "../config/colors";
const DrawerScreen = (props) => {
  console.log(`Props passed to the drawer screen are: ${props}`);

  removeValue = async () => {
    console.log("removing value");
    try {
      await AsyncStorage.removeItem("isUserLoggedIn");
    } catch (e) {
      console.log("There has been an error"); // remove error
    }
    console.log("Done.");
  };
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log Out"
        onPress={() => {
          removeValue();
        }}
      />
    </View>
  );
};
export default DrawerScreen;
