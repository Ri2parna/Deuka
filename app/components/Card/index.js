import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import CardContainer from "./cardcontainer";
import CardImage from "./cardimage";
import CardText from "./cardtext";

const Card = ({ id, mr, title, userId, subTitle, onPress, ...props }) => {
  return (
    <CardContainer mr={mr} onPress={onPress}>
      <CardText title={title} subTitle={subTitle} userId={userId} />
      <CardImage postId={id} />
    </CardContainer>
  );
};
export default Card;
