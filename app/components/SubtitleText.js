import React from "react";
import { Text } from "react-native";

import Colors from "../config/colors";

export default function SubtitleText({ text, fontSize }) {
  return (
    <Text
      style={{
        fontSize: fontSize || 16,
        fontWeight: "bold",
        color: Colors["grey-6"],
        textAlign: "center",
      }}
    >
      {text}
    </Text>
  );
}
