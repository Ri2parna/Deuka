import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../config/colors";

function AppButton({ title, mb = 0, onPress, color = Colors.primary }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, marginBottom: mb }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
