import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function CardImage({
  captionImageUrl = "https://i.pravatar.cc/200?img=9",
}) {
  const [ImageLoading, setImageLoading] = useState(true);
  return (
    <View style={styles.image}>
      <ShimmerPlaceholder style={styles.image} visible={!ImageLoading}>
        <Image
          style={styles.image}
          source={{ uri: captionImageUrl }}
          onLoadEnd={() => setImageLoading(false)}
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
