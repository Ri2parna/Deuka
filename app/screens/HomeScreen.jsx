import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import * as Font from "expo-font";
import { Text, StatusBar, StyleSheet, ActivityIndicator } from "react-native";

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
        if (response.ok) {
          return response.json();
        } else {
          handleError(response);
        }
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

  if (!fontsLoaded || isLoading)
    return (
      <Screen>
        <ActivityIndicator size={60} color={Colors.secondary} />
      </Screen>
    );

  return (
    <FlatList
      style={{ backgroundColor: Colors.white }}
      data={Data}
      renderItem={({ item }) => {
        return (
          <Card
            id={item._id}
            postId={item.postId}
            createdAt={item.createdAt}
            title={item.title}
            authorId={item.userId}
            authorName={item.authorName}
            captionImageUrl={item.captionImageUrl}
            subTitle={item.subTitle}
            onPress={() => {
              navigation.navigate("PostContent", item);
            }}
          />
        );
      }}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={() => {
        return <SubTitle>Nothing to Display for now</SubTitle>;
      }}
      ListHeaderComponent={() => (
        <>
          <GreetingSection navigation={navigation} />
          <PublicoText size={21} style={styles.headline}>
            For You
          </PublicoText>
        </>
      )}
      extraData={navigation}
    />
  );
};
const styles = StyleSheet.create({
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
