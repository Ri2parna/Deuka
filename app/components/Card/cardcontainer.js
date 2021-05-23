import React from "react";
import { StyleSheet } from "react-native";
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
    borderRadius: 16,
    marginHorizontal: 8,
    padding: 8,
    backgroundColor: "#f1e6d6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
});
