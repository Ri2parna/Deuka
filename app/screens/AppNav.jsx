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
import { SearchIcon, NotificationIcon } from "../components/Icons";

const Drawer = createDrawerNavigator();

const headerRightItems = (navigation) => {
  return (
    <View style={styles.centerRowItems}>
      <NotificationIcon navigation={navigation} />
      <SearchIcon navigation={navigation} />
    </View>
  );
};
//
export default function AppNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerScreen}
      drawerType={Dimensions.get("window").width >= 768 ? "permanent" : "slide"}
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleAlign: "center",
      }}
      drawerStyle={{ width: "18%", padding: 4, borderRadius: 8 }}
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
