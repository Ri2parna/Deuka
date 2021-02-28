import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Screen from "../components/Screen";

export default function SettingsScreen() {
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem("isUserLoggedIn");
    } catch (e) {
      console.log("There has been an error"); // error
    }
  };
  return (
    <Screen>
      <TouchableOpacity
        style={{ backgroundColor: "red" }}
        onPress={() => removeValue()}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </Screen>
  );
}
