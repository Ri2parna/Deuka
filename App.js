import * as React from "react";
import { Text, Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import {
  PostScreen,
  ProfileScreen,
  SearchScreen,
  SettingsScreen,
} from "./pages/Screens";

import { StartScreen } from "./pages/StartScreen";
import SearchBars from "./components/components.SearchBar";
import { HomeScreen } from "./pages/HomeScreen";
import DrawerScreen from "./pages/DrawerScreen";

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="New Post" component={PostScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerTitle: () => <SearchBars />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
