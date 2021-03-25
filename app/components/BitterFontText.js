import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function BitterFontText({
  children,
  size,
  bold,
  italic,
  boldItalic,
  ...props
}) {
  const [fontsLoaded, setFontLoadState] = useState(false);
  async function loadFont() {
    await Font.loadAsync({
      "Bitter-Regular": require("../assets/fonts/bitterPro/BitterPro-Regular.ttf"),
      "Bitter-Bold": require("../assets/fonts/bitterPro/BitterPro-Bold.ttf"),
      "Bitter-Italic": require("../assets/fonts/bitterPro/BitterPro-Italic.ttf"),
      "Bitter-BoldItalic": require("../assets/fonts/bitterPro/BitterPro-BoldItalic.ttf"),
    });
    return true;
  }
  useEffect(() => {
    loadFont()
      .then(setFontLoadState)
      .catch(() => {
        console.log("Errors found!!");
      });
  }, []);

  if (!fontsLoaded)
    return (
      <ShimmerPlaceholder>
        <View style={{ width: "100%", height: 160 }}></View>
      </ShimmerPlaceholder>
    );
  return (
    <Text
      style={[
        {
          fontFamily:
            (bold && "Bitter-Bold") ||
            (italic && "Bitter-Italic") ||
            (boldItalic && "Bitter-BoldItalic") ||
            "Bitter-Regular",
          fontSize: size,
        },
      ]}
    >
      {children}
    </Text>
  );
}
