import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNav from "./app/screens/AppNav";
import AuthNav from "./app/screens/AuthNav";
import ReactContext from "./app/hooks/useReactContext";

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("isUserLoggedIn");
    if (value !== null) {
      if (value == "yes") return true;
    }
    return false;
  } catch (e) {
    console.error(e);
  }
};

export default function App() {
  const [isLog, setIsLog] = useState(true);
  return (
    <ReactContext.Provider value={{ isLog, setIsLog }}>
      <NavigationContainer>
        {isLog ? <AppNav /> : <AuthNav />}
      </NavigationContainer>
    </ReactContext.Provider>
  );
}
