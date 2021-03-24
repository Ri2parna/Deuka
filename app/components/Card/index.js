import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import CardContainer from "./cardcontainer";
import CardImage from "./cardimage";
import CardText from "./cardtext";

const Card = ({
  id,
  mr,
  title,
  authorName,
  captionImageUrl,
  subTitle,
  onPress,
  ...props
}) => {
  return (
    <CardContainer mr={mr} onPress={onPress}>
      <CardText title={title} subTitle={subTitle} authorName={authorName} />
      <CardImage captionImageUrl={captionImageUrl} />
    </CardContainer>
  );
};
export default Card;
