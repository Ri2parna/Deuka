import React, { useContext } from "react";
import { Button, Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import ReactContext from "../hooks/useReactContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen({ navigation, ...props }) {
  const reactContext = useContext(ReactContext);
  const handleSubmit = () => {
    reactContext.setIsLog(true);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.icon} source={require("../assets/rhino.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          placeholder="User Email"
          autoCapitalize="none"
          name="email"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <AppFormField
          icon="lock"
          name="password"
          placeholder="password"
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
    marginBottom: 20,
  },
});

export default LoginScreen;
