import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNav from "./app/screens/AppNav";
import AuthNav from "./app/screens/AuthNav";
import ReactContext from "./app/hooks/useReactContext";

export default function App() {
  const [isLog, setIsLog] = useState(false);
  return (
    <ReactContext.Provider value={{ isLog, setIsLog }}>
      <NavigationContainer>
        {isLog ? <AppNav /> : <AuthNav />}
      </NavigationContainer>
    </ReactContext.Provider>
  );
}
