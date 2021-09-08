import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "../screens/SettingsScreen";
import PrescriptionHistory from "../screens/HistoryListScreen";
import PushAlarmListScreen from "../screens/PushAlarmListScreen";
import DashboardTopTabNavigator from "./DashboardTopTabNavigator";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Dashboard":
              iconName = "md-home";
              break;
            case "History":
              iconName = "list-outline";
              break;
            case "Settings":
              iconName = "md-settings";
              break;
            case "Alarm":
              iconName = "notifications";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName="Dashboard"
    >
      <BottomTab.Screen name="Dashboard" component={DashboardTopTabNavigator} />
      <BottomTab.Screen name="History" component={PrescriptionHistory} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
      <BottomTab.Screen name="Alarm" component={PushAlarmListScreen} options={{ tabBarBadge: 3 }} />
    </BottomTab.Navigator >
  );
};

export default BottomTabNavigator;
