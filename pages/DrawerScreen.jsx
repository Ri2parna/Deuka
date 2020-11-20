import React from "react";
import { View, Text, StatusBar } from "react-native";
const DrawerScreen = () => {
  return (
    <View>
      <View style={{ height: StatusBar.currentHeight }}></View>
      <Text>Drawer screen</Text>
    </View>
  );
};
export default DrawerScreen;
