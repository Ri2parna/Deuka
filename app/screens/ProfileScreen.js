import React from "react";
import { StyleSheet, Dimensions, Image, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import Colors from "../config/colors";

export default function ProfileScreen({ username = "Jane Doe", ...props }) {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../assets/Avatar.png")} />
      <View style={styles.background}>
        <Text style={styles.title}>{username}</Text>
        <Divider style={styles.divider} />
        <View style={styles.box}>
          <View style={[styles.textbox, styles.rightBorder]}>
            <Text style={{ fontWeight: "bold" }}>Follower</Text>
            <Text style={{ fontSize: 16 }}>200</Text>
          </View>
          <View style={styles.textbox}>
            <Text style={{ fontWeight: "bold" }}>Following</Text>
            <Text style={{ fontSize: 16 }}>69</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 999,
    borderWidth: 6,
    borderColor: Colors.white,
    margin: 16,
    paddingVertical: 32,
    marginBottom: 24,
  },
  screen: {
    height: "100%",
    width: Dimensions.get("window").width,
    display: "flex",
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  background: {
    flex: 1,
    elevation: 2,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  divider: {
    marginVertical: 4,
    width: Dimensions.get("window").width * 0.8,
    height: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
  },
  textbox: {
    flex: 1,
    padding: 4,
    alignItems: "center",
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: Colors.secondary,
  },
});
