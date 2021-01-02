import React from "react";
import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import AppButton from "../components/AppButton";
import Colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          justifyContent: "center",
          paddingLeft: Dimensions.get("window").width * 0.1,
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>The</Text>
        <Text style={{ fontSize: 48, fontWeight: "bold", color: Colors.red }}>
          Perfect
        </Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>place</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>for</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>reading.</Text>
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
});

export default WelcomeScreen;
