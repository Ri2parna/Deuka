import React from "react";
import { View, Text } from "react-native";

const SubTitle = ({
  children,
  color = "gray",
  size = 16,
  padding = 0,
  ...props
}) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: size,
        padding: padding,
        fontWeight: "bold",
      }}
    >
      {children}
    </Text>
  );
};

export default SubTitle;
