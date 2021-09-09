import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailScreen from "../screens/DetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import QrCodeScannerScreen from "../screens/QrCodeScannerScreen";
import AlarmSettingScreen from "../screens/AlarmSettingScreen";
import HistoryDetailScreen from "../screens/HistoryDetailScreen";
import CreatePrescriptionScreen from "../screens/CreatePrescriptionScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
      <Stack.Screen name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Check In" component={QrCodeScannerScreen} />
      <Stack.Screen name="Create" component={CreatePrescriptionScreen} />
      <Stack.Screen name="Alarm Setting" component={AlarmSettingScreen} />
      <Stack.Screen name="History Detail" component={HistoryDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
