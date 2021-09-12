import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import QrCodeIcon from "../components/QrCodeIcon";
import SettingsScreen from "../screens/SettingsScreen";
import DashboardScreen from "../screens/DashboardScreen";
import PrescriptionHistory from "../screens/HistoryListScreen";
import PushAlarmListScreen from "../screens/PushAlarmListScreen";

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
        headerRight: () => <QrCodeIcon />,
      })}
      initialRouteName="Dashboard"
    >
      <BottomTab.Screen name="Dashboard" component={DashboardScreen} />
      <BottomTab.Screen name="History" component={PrescriptionHistory} />
      <BottomTab.Screen name="Alarm" component={PushAlarmListScreen} options={{ tabBarBadge: 3 }} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator >
  );
};

export default BottomTabNavigator;
