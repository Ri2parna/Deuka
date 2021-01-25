import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const NotificationIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ paddingRight: 20 }}
      onPress={() => navigation.navigate("Notifications")}
    >
      <Ionicons name="ios-notifications-outline" size={32} color="black" />
    </TouchableOpacity>
  );
};
