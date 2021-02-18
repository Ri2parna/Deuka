import React from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";

import BigText from "../components/BigText";
import SubtitleText from "../components/SubtitleText";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { SIGNUP_URL } from "../../settings";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("isUserLoggedIn", String(value));
  } catch (e) {
    console.error(e);
  }
};

function RegisterScreen({ navigation, ...props }) {
  const handleSubmit = ({ name, email, password }) => {
    try {
      fetch(SIGNUP_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.error || data?.caughtErrors) {
            alert("Signup Error");
          } else {
            storeData(data.user);
            navigation.navigate("AppNav");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen style={styles.container}>
      <View style={[styles.centerItems, { flex: 1, padding: 4 }]}>
        <BigText text="Welcome !" />
        <SubtitleText text="Please provide your details for your new account" />
      </View>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            icon="account"
            placeholder="Name"
            name="name"
            autoCorrect={false}
          />
          <AppFormField
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            name="email"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <AppFormField
            icon="lock"
            name="password"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
          />
          <SubmitButton title="Register" />
          <SubtitleText
            text="By creating your account you agree with to our Terms and Conditions"
            fontSize={12}
          />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  centerItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    padding: 16,
  },
});

export default RegisterScreen;
