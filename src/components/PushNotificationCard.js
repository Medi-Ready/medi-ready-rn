import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PushNotificationCard = ({ notificationInfo }) => {
  const { title, body, receivedTime } = notificationInfo;

  return (
    <View style={styles.container}>
      <Text>{receivedTime}</Text>
      <Text>{`⏰ ${title} ⏰`}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    minHeight: 80,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default PushNotificationCard;
