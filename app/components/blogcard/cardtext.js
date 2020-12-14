import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
export default function CardText() {
  return (
    <View
      style={{
        display: "flex",
        flexShrink: -1,
        opacity: 1,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>
        Title of the article which might be a little big and maybe a bit bigger
      </Text>
      <Text>Subtitle of the blog</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 30, width: 30, borderRadius: 50 }}
          source={{ uri: "https://i.pravatar.cc/200?img=57" }}
        />
        <Text style={{ paddingHorizontal: 4 }}>by Authors Name</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    flexWrap: "wrap",
    fontWeight: "bold",
  },
});
