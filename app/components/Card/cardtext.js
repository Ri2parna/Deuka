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
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users/" + userId)
  //     .then((response) => response.json())
  //     .then((json) => setUser(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // });
  return (
    <View style={styles.flexCenter}>
      <ShimmerPlaceholder
        style={{ width: "100%", marginBottom: 2 }}
        visible={!Loading}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{title}</Text>
      </ShimmerPlaceholder>
      <View style={styles.flexRowCenter}>
        <View style={{ height: 28, width: 28, borderRadius: 10 }}>
          <ShimmerPlaceholder
            width={28}
            height={28}
            style={{ borderRadius: 8 }}
            visible={!Loading}
          >
            <Image
              style={styles.avatar}
              source={{
                uri: "https://i.pravatar.cc/200" + "?u=" + User.username,
              }}
            />
          </ShimmerPlaceholder>
        </View>

        <ShimmerPlaceholder visible={!Loading}>
          <SubTitle color={Colors["grey-7"]}>{authorName}</SubTitle>
        </ShimmerPlaceholder>
      </View>
      <ShimmerPlaceholder
        style={{ width: "100%", marginBottom: 2 }}
        visible={!Loading}
      >
        <SubTitle>{subTitle}</SubTitle>
      </ShimmerPlaceholder>
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
