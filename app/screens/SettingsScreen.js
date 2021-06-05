import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import Colors from "../config/colors";
import {removeData} from "../utils/asyncStorage";
export default function SettingsScreen({ navigation }) {
  
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
        <AppButton
          mr={16}
          color={"error"}
          title="SignOut"
          onPress={() => removeData()}
        />
      </View>
    </View>
  );
}
