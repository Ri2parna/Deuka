import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNav from "./app/components/navigation/AppNav";
import AuthNav from "./app/components/navigation/AuthNav";
import ReactContext from "./app/hooks/useReactContext";
import AppLoading from "expo-app-loading";

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("isUserLoggedIn");
    if (value !== null) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(e);
  }
};

export default function App() {
  const [isLog, setIsLog] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((val) => {
        setIsLog(val);
      })
      .then(() => setLoading(false));
  }, []);
  if (Loading) {
    return <AppLoading />;
  }
  return (
    <ReactContext.Provider value={{ isLog, setIsLog }}>
      <NavigationContainer>
        {isLog ? <AppNav /> : <AuthNav />}
      </NavigationContainer>
    </ReactContext.Provider>
  );
}
