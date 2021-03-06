import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../config/colors";
import Screen from "../components/Screen";

const GetStartedScreen = ({ navigation }) => {
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
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Screen style={{ backgroundColor: Colors.primary, height: "100%" }}>
        <View style={styles.block_1}>
          <Text style={styles.text__2}>Deuka</Text>
          <Text style={{ fontSize: 16, color: Colors.white }}>
            where readers and writers come to unite
          </Text>
          <Image
            style={styles.backgroundImage}
            source={require("../assets/studentBackground.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.block__2}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={styles.text__1}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
};
export default GetStartedScreen;

const styles = StyleSheet.create({
  block_1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    flexGrow: 1,
  },
  backgroundImage: {
    height: 500,
    width: 250,
    opacity: 0.3,
    position: "absolute",
    top: Dimensions.get("window").height * 0.0096,
  },
  text__1: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.white,
    padding: "2.6%",
    paddingHorizontal: "14%",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  block__2: {
    flexGrow: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "8%",
  },
  text__2: {
    fontSize: 40,
    fontFamily: "Publico-Regular",
    color: Colors.white,
  },
});
