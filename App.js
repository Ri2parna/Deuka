import React from "react";
import { Text, Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import SearchBars from "./app/components/searchbar";
import { HomeScreen } from "./app/screens/HomeScreen";
import NotificationsScreen from "./app/screens/notificationScreen";
import {
  PostScreen,
  ProfileScreen,
  SearchScreen,
  SettingsScreen,
} from "./app/screens/Screens";
import StartScreen from "./app/screens/StartScreen";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {/* <Drawer.Screen name="Home" component={StartScreen} /> */}
        <Drawer.Screen
          name="Homepage"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
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
