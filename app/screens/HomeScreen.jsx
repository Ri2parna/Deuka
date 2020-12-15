import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import {
  Text,
  StatusBar,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Card from "../components/blogcard";
import GreetingSection from "../components/Greeting";
import Colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";

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
  return (
    <>
      <View style={styles.statusbarFix}></View>
      <GreetingSection navigation={navigation} />
      <View style={{ display: "flex", alignItems: "center" }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={Card}
          />
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  statusbarFix: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary.blue,
  },
});

module.exports = { HomeScreen };

// Redundant or might be used Later
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
