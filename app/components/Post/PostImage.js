import React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

export default function PostImage() {
  return (
    <View style={styles.image}>
      <ShimmerPlaceholder style={styles.image} visible={true}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.pravatar.cc/600?" }}
        />
      </ShimmerPlaceholder>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
    borderRadius: 8,
  },
});
