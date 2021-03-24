import React, { Children } from "react";
import { View, Text } from "react-native";

const Title = ({ children, size = 16, color, ...props }) => {
  return (
    <Text style={{ fontWeight: "bold", color: color, fontSize: size }}>
      {children}
    </Text>
  );
};

export default Title;
