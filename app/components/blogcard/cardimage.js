import React from "react";
import { StyleSheet, Image, View } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

export default function CardImage({ postId }) {
  return (
    <View style={styles.image}>
      <ShimmerPlaceholder style={styles.image}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.pravatar.cc/200?img=" + postId }}
        />
      </ShimmerPlaceholder>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
});
