import * as React from "react";
import { Text, Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import {
  PostScreen,
  ProfileScreen,
  SearchScreen,
  SettingsScreen,
} from "./Screens";

import { StartScreen } from "./StartScreen";
import SearchBars from "../components/searchbar";
import { HomeScreen } from "./HomeScreen";
import DrawerScreen from "./DrawerScreen";
import NotificationsScreen from "./notificationScreen";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="New Post" component={PostScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} options={ct} />
    </Drawer.Navigator>
  );
}
const ct = {
  headerTitle: () => <SearchBars />,
};
