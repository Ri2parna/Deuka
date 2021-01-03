import React, { useState } from "react";
import { Text, Image, View, Button, Dimensions } from "react-native";
import { Divider } from "react-native-elements";
import Colors from "../config/colors";

function NotificationsScreen({ navigation }) {
  const [notifications, UpdateNotifications] = useState([]);
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "96%",
          height: "96%",
          borderColor: Colors.lightGray,
          borderWidth: 2,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {notifications.length == 0 && (
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 120, height: 120 }}
              source={require("../assets/animationLarge.gif")}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: Colors.primary,
                fontSize: 16,
              }}
            >
              No New Notifications
            </Text>
            <Divider
              style={{
                height: "2%",
                width: Dimensions.get("window").width * 0.2,
                marginVertical: 4,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                width: Dimensions.get("window").width * 0.8,
                textAlign: "center",
                color: Colors["grey-6"],
              }}
            >
              We will notify you as soon as there is something New
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
export default NotificationsScreen;
