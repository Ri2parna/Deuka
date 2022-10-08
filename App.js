// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

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
