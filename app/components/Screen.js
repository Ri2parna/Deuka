import React from "react";
import { Dimensions } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";

const DEVICE_HEIGHT = Dimensions.get("screen").height;
const STATUS_BAR = StatusBar.statusBarHeight || 24;
const WINDOW_HEIGHT = Dimensions.get("window").height;

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    height: STATUS_BAR,
  },
});

export default Screen;
