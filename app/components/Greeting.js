import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import useTime from "../hooks/useTime";
import Colors from "../config/colors";

const GreetingSection = ({ navigation }) => {
  // write a function for passing username or send username as props to this component
  const greeting = useTime(); // loads the salutation as text
  // Load Font
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
      <View style={styles.greetingContainer}>
        <View>
          <Text style={styles.greetingFont}>{greeting}</Text>
          <Text style={styles.title}>Rituparna Das</Text>
        </View>
        <Image
          style={styles.AvatarImage}
          source={require("../assets/Avatar.png")}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  greetingContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  greetingFont: {
    fontFamily: "Publico-Regular",
    color: Colors.secondary,
  },
  AvatarImage: {
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  title: {
    fontFamily: "Publico-Regular",
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.secondary,
  },
});
export default GreetingSection;
