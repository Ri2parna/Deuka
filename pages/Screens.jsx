import React from "react";
import { Text, View } from "react-native";
import SearchBars from "../components/components.SearchBar";
function SearchScreen() {
  return (
    <>
      <SearchBars />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Search Screen</Text>
      </View>
    </>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
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
