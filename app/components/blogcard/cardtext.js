import React, { useState, useEffect } from "react";
import { Image, Text, StyleSheet, View } from "react-native";
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
        opacity: 1,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <Text>This is a pretty subtitle</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ height: 30, width: 30, borderRadius: 50 }}
          source={{ uri: "https://i.pravatar.cc/200" + "?u=" + User.username }}
        />
        <Text style={{ paddingHorizontal: 4 }}>{User.name}</Text>
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
