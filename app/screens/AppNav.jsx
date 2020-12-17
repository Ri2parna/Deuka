import * as React from "react";
import { View } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

import SearchBars from "../components/searchbar";
import Colors from "../config/colors";
import { HomeScreen } from "./HomeScreen";
import NotificationsScreen from "./notificationScreen";
import {
  PostScreen,
  ProfileScreen,
  SearchScreen,
  SettingsScreen,
} from "./Screens";

const Drawer = createDrawerNavigator();

const NotificationIcon = () => {
  return (
    <TouchableOpacity style={{ paddingRight: 20 }}>
      <Ionicons name="ios-notifications-outline" size={32} color="black" />
    </TouchableOpacity>
  );
};

const SearchIcon = () => {
  return (
    <TouchableOpacity style={{ paddingRight: 20 }}>
      <EvilIcons name="search" size={32} color="black" />
    </TouchableOpacity>
  );
};

export default function AppNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Deuka 🕊",
          headerRight: () => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <NotificationIcon />
                <SearchIcon />
              </View>
            );
          },
          headerStyle: {
            elevation: 0,
            backgroundColor: Colors.white,
          },
        }}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="New Post" component={PostScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTitle: () => <SearchBars /> }}
      />
    </Drawer.Navigator>
  );
}
