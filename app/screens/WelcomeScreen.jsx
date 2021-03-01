import React from "react";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import { SvgProps } from "react-native-svg";

import AppButton from "../components/AppButton";
import Colors from "../config/colors";
import { SittingChildIcon } from "../components/SittingChildIcon";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Image
        source={require("../assets/reading_child.svg")}
        style={{ height: 200, width: 200 }}
      />
      <SittingChildIcon />
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          justifyContent: "center",
          paddingLeft: Dimensions.get("window").width * 0.1,
        }}
      >
        <Text style={styles.TextStyle}>The</Text>
        <Text style={[styles.TextStyle, { color: Colors.red }]}>Perfect</Text>
        <Text style={styles.TextStyle}>place</Text>
        <Text style={styles.TextStyle}>for</Text>
        <Text style={styles.TextStyle}>reading.</Text>
      </View>
      <Image
        style={{ height: 24, width: 48 }}
        source={require("../assets/rhino.png")}
      />
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    paddingBottom: 30,
    width: "97%",
  },
  logo: {
    width: 180,
    height: 360,
    position: "absolute",
    top: 100,
  },
  TextStyle: { fontSize: 40, fontWeight: "bold" },
});

export default WelcomeScreen;
