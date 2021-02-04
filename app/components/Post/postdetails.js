import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Divider } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { Colors } from "../../config/colors";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function PostDetails() {
  return (
    <View>
      <Title />
      <Divider style={styles.divider} />
      <View style={styles.avatar}>
        <Avatar />
        <AvatarName />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar_image: {
    height: 44,
    width: 44,
    borderRadius: 50,
  },
  avatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  divider: {
    width: Dimensions.get("window").width * 0.6,
    height: 4,
    backgroundColor: "red",
    marginVertical: 2,
  },
});

const Avatar = () => {
  const image_source = {
    uri: "https://i.pravatar.cc/200",
  };
  return (
    <View style={styles.avatar_image}>
      <ShimmerPlaceholder style={styles.avatar_image} visible={true}>
        <Image style={styles.avatar_image} source={image_source} />
      </ShimmerPlaceholder>
    </View>
  );
};

const AvatarName = () => {
  return (
    <ShimmerPlaceholder visible={true}>
      <Text style={{ paddingHorizontal: 4 }}>Jane Doe on 22/22/2222</Text>
    </ShimmerPlaceholder>
  );
};

const Title = () => {
  return (
    <ShimmerPlaceholder visible={true}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Introducing an efficient Big O analyzer
      </Text>
    </ShimmerPlaceholder>
  );
};
