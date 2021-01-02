import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import AppNav from "./AppNav";
import GetStartedScreen from "./GetStartedScreen";

const Stack = createStackNavigator();
const AuthNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Get Started"
      component={GetStartedScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
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
