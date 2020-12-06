import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";

export default function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={styles.image_styles}
        source={require("../assets/studentBackground.png")}
      />
      <TouchableHighlight style={{ padding: "8%", backgroundColor: "cyan" }}>
        <Text>Hotstuff</Text>
      </TouchableHighlight>
      <Text>Hello World</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image_styles: {
    width: "60%",
    height: "60%",
    margin: 20,
  },
});
