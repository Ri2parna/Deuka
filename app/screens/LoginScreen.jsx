import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ReactContext from "../hooks/useReactContext";
import Colors from "../config/colors";
import BigText from "../components/BigText";
import SubtitleText from "../components/SubtitleText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const storeData = async (value) => {
  try {
    console.log("Success: Logging in User");
    await AsyncStorage.setItem("isUserLoggedIn", String(value));
  } catch (e) {
    console.error(e);
  }
};

export default function LoginScreen({ navigation, ...props }) {
  const reactContext = useContext(ReactContext);
  const handleSubmit = ({ email, password }) => {
    try {
      fetch("https://authify-backend.herokuapp.com/v1/login", {
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
    <Screen>
      <View style={[styles.centerItems, { flex: 1 }]}>
        <BigText text="Welcome Back!" />
        <SubtitleText text="Sign In to Continue" />
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
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: 4,
              top: 4,
            }}
          >
            <Text
              style={{
                color: Colors["grey-6"],
                fontWeight: "bold",
                padding: 4,
              }}
            >
              Don't have an account ? -
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ color: Colors.primary, padding: 4 }}>SignUp</Text>
            </TouchableOpacity>
          </View>
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
    alignContent: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    padding: 16,
    width: Dimensions.get("window").width,
  },
});

function SignInCatchphrase() {
  return (
    <Text
      style={{
        fontSize: 16,
        fontWeight: "bold",
        color: Colors["grey-6"],
        alignSelf: "center",
      }}
    >
      Sign In to Continue
    </Text>
  );
}
