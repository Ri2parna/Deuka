import * as React from "react";
import { View, Dimensions } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../config/colors";
import NotificationsScreen from "./notificationScreen";
import { HomeScreen } from "./HomeScreen";
import PostScreen from "./PostScreen";
import ProfileScreen from "./ProfileScreen";
import { SearchScreen, SettingsScreen } from "./Screens";
import ListingEditScreen from "./ListingEditScreen";
import DrawerScreen from "./DrawerScreen";
import { Text } from "react-native";
const Drawer = createDrawerNavigator();

const NotificationIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ paddingRight: 20 }}
      onPress={() => navigation.navigate("Notifications")}
    >
      <Ionicons name="ios-notifications-outline" size={32} color="black" />
    </TouchableOpacity>
  );
};

const SearchIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Search");
      }}
      style={{ paddingRight: 20 }}
    >
      <EvilIcons name="search" size={32} color="black" />
    </TouchableOpacity>
  );
};

const headerRightItems = (navigation) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <NotificationIcon navigation={navigation} />
      <SearchIcon navigation={navigation} />
    </View>
  );
};

export default function AppNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerScreen}
      drawerType={Dimensions.get("window").width >= 768 ? "permanent" : "front"}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: "Deuka 🕊",
          headerRight: () => headerRightItems(navigation),
          headerStyle: {
            elevation: 0,
            backgroundColor: Colors.white,
          },
        })}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="New Post" component={ListingEditScreen} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      <Drawer.Screen
        name="PostContent"
        component={PostScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerTitleAlign: "center" }}
      />
    </Drawer.Navigator>
  );
}
