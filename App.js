import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import StackNav from "./app/screens/StackNav";
import AppNav from "./app/screens/AppNav";
import AuthNav from "./app/screens/AuthNav";
import ReactContext from "./app/hooks/useReactContext";
import SearchBars from "./app/components/searchbar";
import HomeScreen from "./app/screens/HomeScreen";
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
  const [isLog, setIsLog] = useState(true);
  return (
    <ReactContext.Provider value={{ isLog, setIsLog }}>
      <NavigationContainer>
        {isLog ? <AppNav /> : <AuthNav />}
      </NavigationContainer>
    </ReactContext.Provider>
  );
}
