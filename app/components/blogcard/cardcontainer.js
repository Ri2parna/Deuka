import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../config/colors";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.CardContainer}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    width: Dimensions.get("window").width * 0.94,
  },
});

export default CardContainer;
