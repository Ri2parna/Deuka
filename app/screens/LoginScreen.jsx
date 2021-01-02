import React, { useContext } from "react";
import {
  Button,
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ReactContext from "../hooks/useReactContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const storeData = async (value) => {
  try {
    console.log("Saving user logged in status");
    await AsyncStorage.setItem("isUserLoggedIn", String(value));
  } catch (e) {
    console.error(e);
  }
};

function LoginScreen({ navigation, ...props }) {
  const reactContext = useContext(ReactContext);
  const handleSubmit = () => {
    reactContext.setIsLog(true);
    storeData("yes");
  };
  return (
    <Screen style={styles.container}>
      <View
        style={{
          flex: 1,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>Welcome Back!</Text>
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
      </View>
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          padding: 16,
        }}
      >
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
          <Button
            title={"Go to AppNav"}
            onPress={() => {
              handleSubmit();
              navigation.navigate("AppNav");
            }}
          />
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
            <Text style={{ padding: 4 }}>Don't have an account ? -</Text>
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
});

export default LoginScreen;
