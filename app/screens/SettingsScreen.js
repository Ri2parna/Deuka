import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

export default function SettingsScreen({ navigation }) {
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem("isUserLoggedIn");
    } catch (e) {
      console.log("There has been an error"); // error
    }
  };
  return (
    <Screen>
      <AppButton title="SignOut" onPress={() => removeValue()} />
    </Screen>
  );
}
