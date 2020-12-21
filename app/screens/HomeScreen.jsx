import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Text, StatusBar, View, StyleSheet } from "react-native";
import Card from "../components/blogcard";
import GreetingSection from "../components/Greeting";
import Colors from "../config/colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() =>
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    })
  );
  return (
    <ScrollView>
      <GreetingSection navigation={navigation} />
      <View style={{ display: "flex", alignItems: "center" }}>
        <HeaderTitletonight title={"For You"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            style={{ backgroundColor: Colors.green }}
            item={{ title: "Test Title", userId: 1 }}
          />
          <Card item={{ title: "Test Title", userId: 2 }} />
          <Card item={{ title: "Test Title", userId: 3 }} />
          <Card item={{ title: "Test Title", userId: 4 }} />
        </ScrollView>
        <HeaderTitletonight title={"Popular Reads"} />
        <Card item={{ title: "Test Title", userId: 1 }} />
        <Tdiv />
        <Card item={{ title: "Test Title", userId: 2 }} />
        <Tdiv />
        <Card item={{ title: "Test Title", userId: 3 }} />
        <Tdiv />
        <Card item={{ title: "Test Title", userId: 4 }} />
        <Tdiv />
        <Card item={{ title: "Test Title", userId: 4 }} />
        <Tdiv />
        <Card item={{ title: "Test Title", userId: 4 }} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  statusbarFix: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary.blue,
  },
});

module.exports = { HomeScreen };

function HeaderTitletonight({ title }) {
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

function Tdiv() {
  return <Divider style={{ backgroundColor: Colors.primary, width: "88%" }} />;
}
