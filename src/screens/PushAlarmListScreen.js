import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";

import PushNotificationCard from "../components/PushNotificationCard";

const PushAlarmListScreen = () => {
  const notificationList = useSelector((state) => state.pushNotification.pushNotificationList);
  const notificationBadge = useSelector((state) => state.pushNotification.pushNotificationBadge);

  const renderItem = ({ item }) => <PushNotificationCard notificationInfo={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <Text style={styles.dividerText}>💊  알림목록  💊</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.notificationList}
        data={notificationList}
        renderItem={renderItem}
        keyExtractor={(notification) => `${notification.identifier}-${notificationBadge}`}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  notification: {
    alignItems: "center",
    width: 150,
    marginTop: 30,
  },
  dividerText: {
    fontSize: 20,
    marginBottom: 5,
  },
  notificationList: {
    flexGrow: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default PushAlarmListScreen;
