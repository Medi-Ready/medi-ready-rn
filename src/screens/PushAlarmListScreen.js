import React from "react";
import { View, Text, StyleSheet } from "react-native";

import PushNotificationCard from "../components/PushNotificationCard";

const PushAlarmListScreen = () => {
  const newPushNotificationList = [];
  const pastPushNotificationList = [];

  return (
    <View style={styles.container}>
      <View style={styles.newNotification}>
        <Text style={styles.dividerText}>
          NEW
        </Text>
      </View>
      <PushNotificationCard />

      <View style={styles.pastNotification}>
        <Text style={styles.dividerText}>
          Past
        </Text>
      </View>
      <PushNotificationCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  newNotification: {
    alignItems: "center",
    width: 150,
    marginVertical: 30,
    borderBottomWidth: 1,
  },
  pastNotification: {
    alignItems: "center",
    width: 150,
    marginVertical: 30,
    borderBottomWidth: 1,
  },
  dividerText: {
    fontSize: 15,
    marginBottom: 5,
  },
});

export default PushAlarmListScreen;
