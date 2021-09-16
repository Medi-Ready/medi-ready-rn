import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PushNotificationCard = () => {
  return (
    <View style={styles.container}>
      <Text>Push Alarm Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    minHeight: 80,
    padding: 20,
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
