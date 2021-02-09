import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const NotificationIcon = ({ navigation }) => {
  return <Ionicons name="ios-notifications-outline" size={28} color="black" />;
};

export const SearchIcon = ({ navigation }) => {
  return <EvilIcons name="search" size={28} color="black" />;
};

export const HomeIcon = ({ navigation }) => {
  return <Ionicons name="ios-home" size={28} color="black" />;
};

export const SettingsIcon = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <Feather name="settings" size={24} color="black" />
    </TouchableOpacity>
  );
};

export const ProfileIcon = ({ navigation }) => {
  return <Ionicons name="md-person" size={24} color="black" />;
};
