import React from "react";
import { StyleSheet, View } from "react-native";

const postcard = ({ children }) => {
  return <View style={styles.PostCardContainer}>{children}</View>;
};

export default postcard;

const styles = StyleSheet.create({
  PostCardContainer: {
    alignItems: "flex-start",
    display: "flex",
    padding: "4%",
    paddingTop: "8%",
    // borderRadius: 32,
    // backgroundColor: "rgba(211, 211, 211, 1)",
    // backgroundColor: "#F5F5F5",
    backgroundColor: "red",
    // top: -20,
    // height: "100%",
  },
});
