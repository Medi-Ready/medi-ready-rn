import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailScreen from "../screens/DetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import AlarmSettingScreen from "../screens/AlarmSettingScreen";
import HistoryDetailScreen from "../screens/HistoryDetailScreen";
import PrescriptionCreateScreen from "../screens/CreatePrescriptionScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Alarm Setting" component={AlarmSettingScreen} />
      <Stack.Screen name="History Detail" component={HistoryDetailScreen} />
      <Stack.Screen name="Create" component={PrescriptionCreateScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
