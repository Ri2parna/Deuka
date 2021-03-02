import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import Colors from "../config/colors";

export default function SettingsScreen({ navigation }) {
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("isUserLoggedIn");
    } catch (e) {
      console.log("There has been an error"); // error
    }
  };
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "96%",
          height: "96%",
          borderColor: Colors.lightGray,
          borderWidth: 2,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppButton title="SignOut" onPress={() => removeValue()} />
      </View>
    </View>
  );
}
