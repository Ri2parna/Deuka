import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.icon} source={require("../assets/rhino.png")} />

      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
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
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  icon: {
    width: 300,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
  },
});

export default RegisterScreen;
