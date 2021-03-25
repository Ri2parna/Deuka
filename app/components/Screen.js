import React from "react";
import { Dimensions } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    height: Dimensions.get("window").height,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: Dimensions.get("window").width,
  },
});

export default Screen;
