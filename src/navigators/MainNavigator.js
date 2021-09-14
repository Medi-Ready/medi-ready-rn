import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getAlarmTime } from "../redux/features/alarmSettingSlice";

import DetailScreen from "../screens/DetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import QrCodeScannerScreen from "../screens/QrCodeScannerScreen";
import AlarmSettingScreen from "../screens/AlarmSettingScreen";
import HistoryDetailScreen from "../screens/HistoryDetailScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlarmTime());
  }, []);

  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
      <Stack.Screen name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Check In" component={QrCodeScannerScreen} />
      <Stack.Screen name="Alarm Setting" component={AlarmSettingScreen} />
      <Stack.Screen name="History Detail" component={HistoryDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
