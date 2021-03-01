import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../config/colors";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <TouchableOpacity
        style={styles.CardContainer}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
    padding: 16,
  },
});

export default CardContainer;
