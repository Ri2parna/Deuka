import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Text, StatusBar, View, StyleSheet } from "react-native";
import Card from "../components/blogcard";
import GreetingSection from "../components/Greeting";
import Colors from "../config/colors";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

const HomeScreen = ({ navigation }) => {
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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  // prevents moving back to the login screen after succesful login
  useEffect(() =>
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    })
  );
  if (!fontsLoaded) return <AppLoading />;
  return (
    <ScrollView>
      <GreetingSection navigation={navigation} />
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={styles.headline}>For You</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card item={{ title: "Clickable Title", userId: 2, id: 22 }} mr={8} />
          <Card item={{ title: "Test Title", userId: 2 }} mr={8} />
          <Card item={{ title: "Test Title", userId: 3 }} mr={8} />
          <Card item={{ title: "Test Title", userId: 4 }} mr={8} />
        </ScrollView>
        <Text style={styles.headline}>Popular Reads</Text>
        <TouchableOpacity onPress={() => navigation.navigate("PostContent")}>
          <Card item={{ title: "Clickable Post", userId: 1, id: 4 }} />
        </TouchableOpacity>
        <Card item={{ title: "Test Title", userId: 2, id: 32 }} />
        <Card item={{ title: "Test Title", userId: 3, id: 22 }} />
        <Card item={{ title: "Test Title", userId: 4, id: 33 }} />
        <Card item={{ title: "Test Title", userId: 5, id: 66 }} />
        <Card item={{ title: "Test Title", userId: 6, id: 9 }} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headline: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    fontFamily: "Publico-Regular",
    fontSize: 21,
    color: Colors.primary,
  },
  statusbarFix: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary.blue,
  },
});

module.exports = { HomeScreen };
