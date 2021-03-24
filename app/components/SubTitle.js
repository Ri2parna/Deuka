import React from "react";
import { View, Text } from "react-native";

const SubTitle = ({
  children,
  color = "gray",
  size = 16,
  padding = 0,
  center,
  ...props
}) => {
  return (
    <Text
      style={{
        color: color,
        fontSize: size,
        padding: padding,
        fontWeight: "bold",
        textAlign: center && "center",
      }}
    >
      {children}
    </Text>
  );
};

export default SubTitle;
