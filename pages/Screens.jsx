import React from "react";
import { Text, Image, View } from "react-native";
import SearchBars from "../components/components.SearchBar";
function SearchScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ height: 300, width: 400 }}
        source={require("../assets/nopathyet.jpg")}
      />
      <Text>Haven't programed the path yet.</Text>
    </View>
  );
}
function PostScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Post Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}
function NewPostScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>New blogPost Screen</Text>
    </View>
  );
}

module.exports = {
  ProfileScreen,
  SearchScreen,
  PostScreen,
  SettingsScreen,
  NewPostScreen,
};
