import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../../screens/WelcomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import AppNav from "./AppNav";
import GetStartedScreen from "../../screens/GetStartedScreen";

const Stack = createStackNavigator();
const AuthNav = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Get Started" component={GetStartedScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen
      name="AppNav"
      component={AppNav}
      options={{
        header: () => {
          null;
        },
      }}
    />
  </Stack.Navigator>
);

export default AuthNav;
