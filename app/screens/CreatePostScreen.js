import React from "react";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as Yup from "yup";
import AppTextInput from "../components/AppTextInput";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
// import listingApi from "../api/listings";

// import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string()
    .required()
    .min(20, "Please write atleast 20 character")
    .label("Description"),
  images: Yup.array().min(1, "Please select atlease one image."),
});

export default function CreatePostScreen() {
  // const location = useLocation();

  const handleSubmit = async (listing) => {
    // const result = await listingApi.addListing(listing);
    const result = null;
    if (!result.ok) {
      return alert("Could not save the data");
    }
    alert("Success");
    // console.log(listing);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", subtitle: "" }}
        onSubmit={() => null}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField maxLength={255} name="subTitle" placeholder="Sub-title" />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
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
