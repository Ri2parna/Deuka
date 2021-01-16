import React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

export default function PostImage() {
  return (
    <View style={styles.image}>
      <ShimmerPlaceholder style={styles.image} visible={true}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/600/?blur=2" }}
        />
      </ShimmerPlaceholder>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});
