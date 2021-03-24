import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const cardcontainer = ({ children, onPress, ...props }) => {
  return (
    <TouchableOpacity style={styles.CardContainer} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default cardcontainer;

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    padding: 16,
  },
});
