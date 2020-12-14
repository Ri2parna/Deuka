import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import {
  Text,
  StatusBar,
  View,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import Card from "../components/blogcard";
import GreetingSection from "../components/Greeting";

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.statusbarFix}></View>
      <GreetingSection navigation={navigation} />
      <View style={{ display: "flex", alignItems: "center" }}>
        <Card />
        <Card />
        <Card />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  statusbarFix: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#edf6f9",
  },
});

module.exports = { HomeScreen };

function HeaderTitle({ title }) {
  const [fontsLoaded, setFontLoadState] = useState(false);
  async function loadFont() {
    await Font.loadAsync({
      "Publico-Regular": require("../assets/fonts/Publico.ttf"),
    });
    return true;
  }
  useEffect(() => {
    loadFont().then(setFontLoadState);
  }, []);
  if (!fontsLoaded) return <AppLoading />;
  else {
    return (
      <View style={{ paddingHorizontal: 16, marginTop: 16, marginBottom: 8 }}>
        <Text style={{ fontFamily: "Publico-Regular", fontSize: 21 }}>
          {title}
        </Text>
      </View>
    );
  }
}
