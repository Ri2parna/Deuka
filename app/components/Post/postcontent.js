import React from "react";
import { View } from "react-native";
import BitterFontText from "../BitterFontText";

export default function PostContent({ body }) {
  return (
    <View style={{ flexGrow: 10 }}>
      <BitterFontText size={16}>{body}</BitterFontText>
    </View>
  );
}
