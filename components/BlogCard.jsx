import React, { useEffect, useState } from "react";
import { Dimensions, Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BlogCard = () => {
  return (
    <TouchableOpacity style={styles.cardLayout}>
      <View style={{ width: "70%" }}>
        <View style={{ display: "flex" }}>
          <Text style={{ fontWeight: "bold" }}>
            Title of the article which might be a little big and maybe a bit
            bigger
          </Text>
        </View>
        <Text>Subtitle of the blog</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 30, width: 30, borderRadius: 50 }}
            source={{ uri: "https://i.pravatar.cc/200?img=57" }}
          />
          <Text style={{ paddingHorizontal: 4 }}>by Authors Name</Text>
        </View>
      </View>
      <Image
        style={{ height: 100, width: 100, borderRadius: 4 }}
        source={{ uri: "https://i.pravatar.cc/?img=63" }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardLayout: {
    backgroundColor: "white",
    marginHorizontal: 8,
    marginBottom: 1.5,
    paddingHorizontal: 16,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderRadius: 2,
  },
});
export default BlogCard;
