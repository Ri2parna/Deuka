import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { View, StatusBar, StyleSheet, ActivityIndicator } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import GreetingSection from "../components/Greeting";
import Colors from "../config/colors";
import { BASE_URL, API_VERSION } from "../../settings.js";
import SubTitle from "../components/SubTitle";
import PublicoText from "../components/PublicoText";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded, setFontLoadState] = useState(false);

  async function loadFont() {
    await Font.loadAsync({
      "Publico-Regular": require("../assets/fonts/Publico.ttf"),
    });
    return true;
  }
  const [isLoading, setLoading] = useState(true);
  const [Data, setData] = useState([]);

  useEffect(() => {
    loadFont().then(setFontLoadState);
    fetch(BASE_URL + API_VERSION + "posts")
      .then(function handleResponse(response) {
        if (response.ok) return response.json();
        else handleError(response);
      })
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

  if (!fontsLoaded || isLoading) return <LoadingScreen />;

  return (
    <FlatList
      style={styles.bg}
      data={Data}
      renderItem={({ item }) => <Card {...item} />}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={NoPosts}
      ListHeaderComponent={Header}
      extraData={navigation}
      ItemSeparatorComponent={Divider}
    />
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.yellow,
  },
  headline: {
    padding: 16,
    paddingBottom: 8,
    color: Colors.secondary,
  },
  statusbarFix: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary.blue,
  },
});

module.exports = { HomeScreen };

function handleError(response) {
  return -1;
}

const NoPosts = () => <SubTitle>Nothing to Display for now</SubTitle>;

const Header = () => (
  <View style={styles.statusbarFix}>
    <GreetingSection />
    <PublicoText size={21} style={styles.headline}>
      Start Reading
    </PublicoText>
  </View>
);

const LoadingScreen = () => (
  <Screen>
    <ActivityIndicator size={60} color={Colors.secondary} />
  </Screen>
);

const Divider = () => (
  <View
    style={{
      borderBottomColor: "aliceblue",
      borderBottomWidth: 1,
      marginHorizontal: 20,
    }}
  />
);
