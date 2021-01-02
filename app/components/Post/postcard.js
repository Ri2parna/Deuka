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
    display: "flex",
    padding: 4,
    marginHorizontal: 6,
  },
});
