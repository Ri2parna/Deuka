import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ReactContext from "../hooks/useReactContext";
import { LOGIN_URL } from "../../settings";
import Colors from "../config/colors";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { storeData } from "../utils/asyncStorage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen({ navigation, ...props }) {
  const reactContext = useContext(ReactContext);
  const {
    Username,
    UserId,
    setUserId,
    setUsername,
    UserEmail,
    setUserEmail,
    UserPassword,
    setUserPassword,
    UserToken,
    setUserToken,
  } = reactContext;
  const handleSubmit = ({ email, password }) => {
    try {
      fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.error) {
            alert("Login Error");
          } else {
            storeData("isUserLoggedIn", true);
            storeData("userId", data.user._id);
            storeData("username", data.user.username);
            storeData("email", data.user.email);
            storeData("password", password);
            storeData("token", data.token);
            navigation.navigate("AppNav");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <View style={styles.flexGrowCenter}>
        <Title size={32}>Welcome Back!</Title>
        <SubTitle>Sign In to Continue</SubTitle>
      </View>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
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
          <SubmitButton title="Login" />
          <View style={styles.flexRow}>
            <SubTitle color={Colors["grey-8"]} padding={4} size={14}>
              Don't have an account ? -
            </SubTitle>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <SubTitle color={Colors.primary} padding={4} size={14}>
                Sign Up
              </SubTitle>
            </TouchableOpacity>
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flexGrowCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  flexRow: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 4,
    top: 4,
  },
  formContainer: {
    flex: 1,
    padding: 16,
    width: Dimensions.get("window").width,
  },
  SubTitle: {
    color: Colors["grey-6"],
    fontWeight: "bold",
    padding: 4,
  },
});
