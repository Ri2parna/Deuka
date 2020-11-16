import React from "react";
import { Button, Image, View } from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../assets/student-monochrome-400px.png")}
        style={{ width: 200, height: 300, margin: 20 }}
      />
      <View style={{ position: "absolute", bottom: "10%" }}>
        <Button
          title="Get Started"
          color="black"
          onPress={() => {
            navigation.navigate("homePage");
          }}
        />
      </View>
    </View>
  );
}
module.exports = { StartScreen };
