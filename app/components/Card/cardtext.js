import React, { useState, useEffect } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

import Colors from "../../config/colors";
import SubTitle from "../SubTitle";

export default function CardText({
  title,
  authorName = "Rituparna Das",
  subTitle,
}) {
  const [Loading, setLoading] = useState(false);
  const [User, setUser] = useState({});
  let imageUrl = "https://i.pravatar.cc/200" + "?u=" + User.username;

  return (
    <View style={styles.flexCenter}>
      <Text style={{ fontWeight: "700", fontSize: 20 }}>{title}</Text>
      <SubTitle>{subTitle}</SubTitle>
      <View style={styles.flexRowCenter}>
        <Image style={styles.avatar} source={{ uri: imageUrl }} />
        <SubTitle color={Colors["grey-3"]}>{authorName}</SubTitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: { height: 24, width: 24, borderRadius: 10 },
  headingStyle: {
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    width: "70%",
  },
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
});
