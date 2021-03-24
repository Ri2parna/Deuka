import React, { useContext } from "react";
import { View, Text, Dimensions } from "react-native";
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
import Colors from "../config/colors";

const DrawerScreen = ({ navigation, ...props }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.3,
          backgroundColor: Colors.primary,
        }}
      >
        <CardImage />
        <View>
          <PublicoText style={{ padding: 8 }} size={21}>
            Username
          </PublicoText>
          <Text style={{ padding: 8 }}>UserEmail</Text>
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
