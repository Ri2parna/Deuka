import React from "react";
import { View, Text } from "react-native";

export default function BigText({ text }) {
  return (
    <Text style={{ textAlign: "center", fontSize: 36, fontWeight: "bold" }}>
      {text}
    </Text>
  );
}
