import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

import PostDetails from "../components/Post/postdetails";
import PostContent from "../components/Post/postcontent";
import PostCard from "../components/Post/postcard";
import PostImage from "../components/Post/PostImage";
import { Divider } from "react-native-elements";
import Colors from "../config/colors";

export default function ReadPostScreen({ navigation, route }) {
  useEffect(() => {
    // use the http get call here
  }, []);
  const {
    id,
    postId, // unique _id value where only the body of the item is stored
    authorId,
    authorName,
    subTitle,
    title,
    captionImageUrl,
    subTitle,
    body,
  } = route.params;
  return (
    <ScrollView style={{ backgroundColor: Colors.white }}>
      <PostImage captionImageUrl={captionImageUrl} />
      <PostCard>
        <PostDetails
          authorName={authorName}
          title={title}
          subTitle={subTitle}
        />
        <PostContent body={body} />
      </PostCard>
      {/* Comment Component on the post screen */}
      <Divider style={styles.divider} />
      <View style={styles.bottomPadding}></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bottomPadding: {
    width: Dimensions.get("window").width,
    height: StatusBar.currentHeight * 1.2,
    backgroundColor: Colors.yellow,
  },
  divider: {
    width: Dimensions.get("window").width * 0.5,
    height: 4,
    backgroundColor: "red",
    marginVertical: 2,
    alignSelf: "center",
  },
});
