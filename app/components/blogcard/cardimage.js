import React from "react";
import { StyleSheet, Image } from "react-native";

export default function CardImage({ postId }) {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://i.pravatar.cc/200?img=" + postId }}
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
