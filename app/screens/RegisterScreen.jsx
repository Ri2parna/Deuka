import React from "react";
import { Image, StyleSheet, View, Text, Dimensions } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <View
        style={{
          flex: 1,
          display: "flex",
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>Welcome!</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: Colors["grey-6"],
            textAlign: "center",
          }}
        >
          Please provide your details for your new account
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          padding: 16,
        }}
      >
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => null}
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
          <Text
            style={{
              fontWeight: "bold",
              color: Colors["grey-7"],
              padding: 4,
              fontSize: 12,
              textAlign: "center",
            }}
          >
            By creating your account you agree with to our Terms and Conditions
          </Text>
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
});

export default RegisterScreen;
