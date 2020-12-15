import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.logo}
        source={require("../assets/studentBackground.png")}
      />
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
});

export default WelcomeScreen;
