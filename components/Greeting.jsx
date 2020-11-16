import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
const GreetingSection = ({ navigation }) => {
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <View style={styles.greetingContainer}>
          <View>
            <Text style={styles.greetingFont}>Good Morning,</Text>
            <Text
              style={{
                fontFamily: "Publico-Regular",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Rituparna Das
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.AvatarImage}
              source={{ uri: "https://i.pravatar.cc/200?u=rituparna" }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  greetingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    paddingTop: 16,
  },
  greetingFont: {
    fontFamily: "Publico-Regular",
  },
  AvatarImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});
export default GreetingSection;
