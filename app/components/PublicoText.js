import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

async function loadFont() {
  await Font.loadAsync({
    "Publico-Regular": require("../assets/fonts/Publico.ttf"),
  });
  return true;
}

export default function PublicoText({ children, size, ...props }) {
  const [fontsLoaded, setFontLoadState] = useState(false);

  useEffect(() => {
    loadFont()
      .then(setFontLoadState)
      .catch(() => {
        console.warn("Errors found while loading publico font");
      });
  }, []);

  if (!fontsLoaded)
    return (
      <ShimmerPlaceholder>
        <View style={{ width: "100%", height: 160 }}></View>
      </ShimmerPlaceholder>
    );
  return (
    <Text style={[{ fontFamily: "Publico-Regular", fontSize: size }]}>
      {children}
    </Text>
  );
}
