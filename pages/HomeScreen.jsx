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
import BlogCard from "../components/BlogCard";
import OldBlogCard from "../components/OldBlogCard";
import GreetingSection from "../components/Greeting";

function HeaderTitle({ title }) {
  const [fontsLoaded, setFontLoadState] = useState(false);
  async function loadFont() {
    await Font.loadAsync({
      "Publico-Regular": require("../assets/fonts/Publico-Regular.ttf"),
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
function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.statusbarFix}
      showsVerticalScrollIndicator={false}
    >
      <GreetingSection navigation={navigation} />
      <HeaderTitle title="For You" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, flexDirection: "row" }}
      >
        <OldBlogCard />
        <OldBlogCard />
        <OldBlogCard />
        <OldBlogCard />
      </ScrollView>
      <HeaderTitle title="Popular" />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  statusbarFix: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#edf6f9",
  },
});

module.exports = { HomeScreen };
