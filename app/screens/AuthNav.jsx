import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import AppNav from "./AppNav";

const Stack = createStackNavigator();

const AuthNav = () => (
  <Stack.Navigator>
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
