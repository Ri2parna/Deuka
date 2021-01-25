import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import Colors from "../../config/colors";
import CardContainer from "./cardcontainer";
import CardImage from "./cardimage";
import CardText from "./cardtext";

const Card = ({ item, mr }) => {
  return (
    <CardContainer mr={mr}>
      <CardText title={item.title} userId={item.userId} />
      <CardImage postId={item.id} />
    </CardContainer>
  );
};
export default Card;
