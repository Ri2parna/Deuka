import React from "react";
import { useNavigation } from "@react-navigation/native";
import CardContainer from "./cardcontainer";
import CardImage from "./cardimage";
import CardText from "./cardtext";

const Card = ({
  _id,
  title,
  authorName,
  captionImageUrl,
  subTitle,
  ...others
}) => {
  let navigation = useNavigation();
  return (
    <CardContainer onPress={() => navigation.navigate("PostContent", { pid: _id })}>
      <CardText title={title} subTitle={subTitle} authorName={authorName} />
      <CardImage captionImageUrl={captionImageUrl} />
    </CardContainer>
  );
};
export default Card;
