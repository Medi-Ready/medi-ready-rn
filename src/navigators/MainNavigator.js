import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import DashboardTopTabNavigator from "./DashboardTopTabNavigator";
import PrescriptionHistory from "../screens/PrescriptionHistoryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import PushAlarmListScreen from "../screens/PushAlarmListScreen";

const MainTab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <MainTab.Navigator
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
        }
      })}
    >
      <MainTab.Screen name="Dashboard" component={DashboardTopTabNavigator} />
      <MainTab.Screen name="History" component={PrescriptionHistory} />
      <MainTab.Screen name="Settings" component={SettingsScreen} />
      <MainTab.Screen name="Alarm" component={PushAlarmListScreen} options={{ tabBarBadge: 3 }} />
    </MainTab.Navigator >
  );
};

export default MainNavigator;
