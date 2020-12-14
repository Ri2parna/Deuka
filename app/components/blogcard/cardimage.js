import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CardImage() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://i.pravatar.cc/200?img=57" }}
    />
  );
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
});
