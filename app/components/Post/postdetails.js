import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Divider } from "react-native-elements";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

export default function PostDetails() {
  return (
    <View>
      <Title />
      <Divider
        style={{
          width: Dimensions.get("window").width * 0.6,
          height: 4,
          backgroundColor: "red",
        }}
      />
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
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Introducing an efficient Big O analyzer
      </Text>
    </ShimmerPlaceholder>
  );
};
