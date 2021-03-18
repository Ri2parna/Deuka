import React from "react";
import BitterFontText from "../BitterFontText";

export default function PostContent({ body }) {
  return <BitterFontText size={16}>{body}</BitterFontText>;
}
