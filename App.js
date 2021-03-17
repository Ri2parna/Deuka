import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNav from "./app/components/navigation/AppNav";
import AuthNav from "./app/components/navigation/AuthNav";
import ReactContext from "./app/hooks/useReactContext";
import AppLoading from "expo-app-loading";

import { getData } from "./app/utils/asyncStorage";

export default function App() {
  const [isLog, setIsLog] = useState(false);
  const [UserId, setUserId] = useState(null);
  const [Username, setUsername] = useState(null);
  const [UserEmail, setUserEmail] = useState(null);
  const [UserPassword, setUserPassword] = useState(null);
  const [UserToken, setUserToken] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const p0 = getData().then((id) => setIsLog(id));
    const p1 = getData("userId").then((id) => setUserId(id));
    const p2 = getData("username").then((name) => setUsername(name));
    const p3 = getData("email").then((email) => setUserEmail(email));
    const p4 = getData("password").then((password) =>
      setUserPassword(password)
    );
    const p5 = getData("token").then((token) => setUserToken(token));
    Promise.all([p0, p1, p2, p3, p4, p5]).then(() => setLoading(false));
  }, []);
  if (Loading) {
    return <AppLoading />;
  }
  return (
    <ReactContext.Provider
      value={{
        isLog,
        setIsLog,
        UserId,
        setUserId,
        Username,
        setUsername,
        UserEmail,
        setUserEmail,
        UserPassword,
        setUserPassword,
        UserToken,
        setUserToken,
      }}
    >
      <NavigationContainer>
        {isLog ? <AppNav /> : <AuthNav />}
      </NavigationContainer>
    </ReactContext.Provider>
  );
}
