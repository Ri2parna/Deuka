import React from "react";
import { Dimensions } from "react-native";
import { View, StyleSheet } from "react-native";

export default class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.PostCardContainer}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  PostCardContainer: {
    alignItems: "flex-start",
    display: "flex",
    padding: "4%",
    paddingTop: "8%",
    borderRadius: 32,
    // backgroundColor: "rgba(211, 211, 211, 1)",
    backgroundColor: "#F5F5F5",
    top: -20,
  },
});
