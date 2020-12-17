import React, { useState } from "react";
import { Text, Image, View, Button } from "react-native";
import Colors from "../config/colors";

function NotificationsScreen({ navigation }) {
  const [notifications, UpdateNotifications] = useState([]);
  return (
    <View
      style={{
        backgroundColor: Colors.primary.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "96%",
          height: "96%",
          borderColor: Colors["grey-8"],
          borderWidth: 2,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {notifications.length == 0 && (
          <>
            <Text>No New Notifications</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
          </>
        )}
      </View>
    </View>
  );
}
export default NotificationsScreen;
