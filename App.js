import React from "react";
import { Text, Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// importing the required screens
import SearchBars from "./components/components.SearchBar";
import { HomeScreen } from "./pages/HomeScreen";
import NotificationsScreen from "./pages/notificationScreen";
import {
  PostScreen,
  ProfileScreen,
  SearchScreen,
  SettingsScreen,
} from "./pages/Screens";
import StartScreen from "./pages/StartScreen";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StartScreen} />
        <Drawer.Screen name="homePage" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="New Post" component={PostScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} options={ct} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const ct = {
  headerTitle: () => <SearchBars />,
};
