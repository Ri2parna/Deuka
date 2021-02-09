// !TODO: https://reactnavigation.org/docs/drawer-navigator/ , use this link for implementing the custom drawer screen

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerItem } from "@react-navigation/drawer";

import Colors from "../config/colors";

import {
  NotificationIcon,
  HomeIcon,
  SettingsIcon,
  ProfileIcon,
  SearchIcon,
} from "../components/Icons";

const DrawerScreen = (props) => {
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem("isUserLoggedIn");
    } catch (e) {
      console.log("There has been an error"); // error
    }
    console.log("Done.");
  };

  return (
    <View style={styles.container__Sidebar}>
      <View style={[styles.innerContainer__sidebar, styles.shadow]}>
        <DrawerItem label={() => null} icon={NotificationIcon} />
        <DrawerItem label={() => null} icon={SearchIcon} />
        <DrawerItem label={() => null} icon={HomeIcon} />
        <DrawerItem label={() => null} icon={SettingsIcon} />
        <DrawerItem label={() => null} icon={ProfileIcon} />
      </View>
    </View>
  );
};
export default DrawerScreen;
const styles = StyleSheet.create({
  container__Sidebar: {
    display: "flex",
    height: "100%",
    borderTopRightRadius: 64,
    borderBottomEndRadius: 64,
    justifyContent: "center",
  },
  innerContainer__sidebar: {
    paddingVertical: 128,
    borderRadius: 32,
    margin: 2,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
