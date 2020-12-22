import React, { useState, useEffect } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import Colors from "../../config/colors";
export default function CardText({ title, userId }) {
  const [Loading, setLoading] = useState(true);
  const [User, setUser] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View
      style={{
        display: "flex",
        flexShrink: -1,
        justifyContent: "center",
      }}
    >
      <ShimmerPlaceholder
        style={{ width: "100%", marginBottom: 2 }}
        visible={Loading}
      >
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </ShimmerPlaceholder>
      <ShimmerPlaceholder
        style={{ width: "100%", marginBottom: 2 }}
        visible={Loading}
      >
        <Text>This is a pretty subtitle</Text>
      </ShimmerPlaceholder>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ height: 30, width: 30, borderRadius: 50 }}>
          <ShimmerPlaceholder
            width={30}
            height={30}
            style={{ borderRadius: 50 }}
            visible={Loading}
          >
            <Image
              style={{ height: 30, width: 30, borderRadius: 50 }}
              source={{
                uri: "https://i.pravatar.cc/200" + "?u=" + User.username,
              }}
            />
          </ShimmerPlaceholder>
        </View>

        <ShimmerPlaceholder visible={Loading}>
          <Text style={{ paddingHorizontal: 4 }}>{User.name}</Text>
        </ShimmerPlaceholder>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    flexWrap: "wrap",
    fontWeight: "bold",
  },
});
