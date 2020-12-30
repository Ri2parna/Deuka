import React from "react";
import { ScrollView, StatusBar } from "react-native";

import PostDetails from "../components/Post/postdetails";
import PostContent from "../components/Post/postcontent";
import PostCard from "../components/Post/postcard";
import PostImage from "../components/Post/PostImage";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function PostScreen({ postId }) {
  return (
    <ScrollView
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.white,
      }}
    >
      <PostImage />
      <PostCard>
        <PostDetails />
        <PostContent />
      </PostCard>
      {/* Comment Component on the post screen */}
    </ScrollView>
  );
}
