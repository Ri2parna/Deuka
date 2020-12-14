import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "../../config/colors";
import CardContainer from "./cardcontainer";
import CardImage from "./cardimage";
import CardText from "./cardtext";
const Card = () => {
  return (
    <CardContainer>
      <CardText />
      <CardImage />
    </CardContainer>
  );
};
export default Card;
