import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Text, StatusBar, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

import Card from "../components/Card";
import GreetingSection from "../components/Greeting";
import Colors from "../config/colors";
import { BASE_URL, API_VERSION } from "../../settings.js";

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

  if (!fontsLoaded || isLoading) return <AppLoading />;

  return (
    <FlatList
      style={{ backgroundColor: Colors.white }}
      data={Data}
      renderItem={({ item }) => {
        return (
          <Card
            id={item.id}
            title={item.title}
            userId={item.userId}
            subTitle={item.subTitle}
            onPress={() => {
              navigation.navigate("PostContent", item);
            }}
          />
        );
      }}
      keyExtractor={(item) => item.title}
      ListEmptyComponent={() => {
        return (
          <Text style={{ textAlign: "center" }}>
            Nothing to Display for now
          </Text>
        );
      }}
      ListHeaderComponent={() => (
        <>
          <GreetingSection navigation={navigation} />
          <Text style={styles.headline}>For You</Text>
        </>
      )}
      extraData={navigation}
    />
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
    color: Colors.secondary,
  },
  statusbarFix: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary.blue,
  },
});

module.exports = { HomeScreen };

{
  /* Test Code to display items
            <Card
              title={"A short title"}
              subTitle={"A short subtitle"}
              userId={3}
              mr={8}
            />
            <Card
              title={"A kind of medium title"}
              subTitle={"A kind of medium subtitle"}
              userId={2}
              mr={8}
            />
            <Card
              title={"A long title to check for issues with user experience"}
              subTitle={
                "A long subtitle to check for issues with user experience"
              }
              userId={9}
              mr={8}
            />
            <Card
              title={
                "A super long title as a final test to check for irregular display issues in small screens"
              }
              subTitle={
                "A super long subtitle as a final test to check for irregular display issues in small screens"
              }
              userId={6}
              mr={8}
            /> */
}
