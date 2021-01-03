import React from "react";
import { StyleSheet, Dimensions, Image, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import Colors from "../config/colors";

export default function ProfileScreen() {
  return (
    <View
      style={{
        height: "100%",
        width: Dimensions.get("window").width,
        display: "flex",
        backgroundColor: Colors.primary,
        alignItems: "center",
      }}
    >
      <Image
        style={{
          height: 160,
          width: 160,
          borderRadius: 999,
          borderWidth: 6,
          borderColor: Colors.white,
          margin: 16,
          paddingVertical: 32,
          marginBottom: 24,
        }}
        source={require("../assets/Avatar.png")}
      />
      <View
        style={{
          flex: 1,
          elevation: 2,
          backgroundColor: Colors.white,
          borderRadius: 16,
          padding: 16,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.secondary,
            textAlign: "center",
          }}
        >
          Rituparna Das
        </Text>
        <Divider
          style={{
            marginVertical: 4,
            width: Dimensions.get("window").width * 0.8,
            height: 2,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              borderRightColor: Colors.secondary,
              padding: 4,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Follower</Text>
            <Text style={{ fontSize: 16 }}>200</Text>
          </View>
          <View
            style={{
              flex: 1,
              borderLeftWidth: 1,
              borderLeftColor: Colors.secondary,
              padding: 4,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Following</Text>
            <Text style={{ fontSize: 16 }}>69</Text>
          </View>
        </View>
        <View>
          <Text>TODO: implement Request for applications</Text>
        </View>
      </View>
    </View>
  );
}
