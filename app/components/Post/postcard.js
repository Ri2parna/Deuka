import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    borderColor: "red",
    borderRadius: 8,
    borderWidth: 2,
    display: "flex",
    padding: 8,
    marginHorizontal: 8,
  },
});
