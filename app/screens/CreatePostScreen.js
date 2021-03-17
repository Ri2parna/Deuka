import React, { useContext, useEffect, useReducer } from "react";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import * as Yup from "yup";
import { API_VERSION, BASE_URL } from "../../settings";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import ReactContext from "../hooks/useReactContext";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string()
    .required()
    .min(20, "Please write atleast 20 character")
    .label("Description"),
  images: Yup.array().min(1, "Please select atlease one image."),
});

export default function CreatePostScreen() {
  const reactContext = useContext(ReactContext);
  const { Username, UserId } = reactContext;

  const handleSubmit = async ({ title, subTitle, body }) => {
    fetch(BASE_URL + API_VERSION + "username" + "/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: UserId,
        Username,
        title,
        subTitle,
        body,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", subtitle: "" }}
        onSubmit={handleSubmit}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField maxLength={255} name="subTitle" placeholder="Sub-title" />
        <AppFormField
          maxLength={255}
          multiline
          name="body"
          numberOfLines={3}
          placeholder="body"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    padding: 8,
    display: "flex",
    paddingBottom: StatusBar.currentHeight,
  },
});
