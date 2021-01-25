import * as React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "../config/colors";
import NotificationsScreen from "./notificationScreen";
import { HomeScreen } from "./HomeScreen";
import PostScreen from "./PostScreen";
import ProfileScreen from "./ProfileScreen";
import { SearchScreen, SettingsScreen } from "./Screens";
import ListingEditScreen from "./ListingEditScreen";
import DrawerScreen from "./DrawerScreen";
import { NotificationIcon } from "../components/NotificationIcon";
import { SearchIcon } from "./../components/SearchIcon";

const Drawer = createDrawerNavigator();

const headerRightItems = (navigation) => {
  return (
    <View style={styles.centerRowItems}>
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
          headerRight: () => headerRightItems(navigation),
          headerTitleAlign: "left",
        })}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="New Post" component={ListingEditScreen} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
      <Drawer.Screen name="PostContent" component={PostScreen} options={{}} />
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
});
