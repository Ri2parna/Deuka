import * as React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "../../config/colors";

import NotificationsScreen from "../../screens/notificationScreen";
import { HomeScreen } from "../../screens/HomeScreen";
import ReadPostScreen from "../../screens/ReadPostScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { SearchScreen } from "../../screens/Screens";
import CreatePostScreen from "../../screens/CreatePostScreen";
import SettingsScreen from "../../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function AppNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType={Dimensions.get("window").width >= 768 ? "permanent" : "slide"}
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: "Deuka 🕊",
          headerTitleAlign: "left",
        })}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="New Post" component={CreatePostScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="PostContent" component={ReadPostScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  centerRowItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.white,
  },
  drawerStyle: {
    width: "18%",
    padding: 4,
    borderRadius: 8,
  },
});
