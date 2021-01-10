import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../config/colors";

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
      <View
        style={{
          height: Dimensions.get("window").height + StatusBar.currentHeight,
          width: Dimensions.get("screen").width,
          backgroundColor: Colors.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.block_1}>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "Publico-Regular",
              color: Colors.white,
              opacity: 1,
            }}
          >
            Deuka
          </Text>
          <Text style={{ fontSize: 16, color: Colors.white }}>
            where readers and writers come to unite
          </Text>
          <Image
            style={{
              height: 500,
              width: 250,
              opacity: 0.3,
              position: "absolute",
              top: Dimensions.get("window").height * 0.0095,
            }}
            source={require("../assets/studentBackground.png")}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            flexGrow: 1,
            width: Dimensions.get("window").width,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: 32,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: Colors.white,
              padding: 4,
              paddingHorizontal: 8,
              borderRadius: 50,
            }}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={{ color: Colors.white }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
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
});
