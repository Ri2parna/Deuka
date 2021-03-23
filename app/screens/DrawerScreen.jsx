import React, { useContext } from "react";
import { View, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  HomeIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
  WriteIcon,
} from "../components/Icons";
import CardImage from "../components/Card/cardimage";
import PublicoText from "../components/PublicoText";

const DrawerScreen = ({ navigation, ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CardImage />
        <View>
          <PublicoText size={21}>Username</PublicoText>
          <Text>UserEmail</Text>
        </View>
      </View>
      <DrawerItem
        label="Home"
        icon={HomeIcon}
        onPress={() => navigation.navigate("Home")}
      />
      <DrawerItem
        label="View Profile"
        icon={ProfileIcon}
        onPress={() => navigation.navigate("Profile")}
      />
      <DrawerItem
        label="Notifications"
        icon={NotificationIcon}
        onPress={() => navigation.navigate("Notifications")}
      />
      <DrawerItem
        label="Write Something"
        icon={WriteIcon}
        onPress={() => navigation.navigate("New Post")}
      />
      <DrawerItem
        label="Search"
        icon={SearchIcon}
        onPress={() => navigation.navigate("Search")}
      />
      <DrawerItem
        label="Settings"
        icon={SettingsIcon}
        onPress={() => navigation.navigate("Settings")}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerScreen;
