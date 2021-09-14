import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getAlarmTime } from "../redux/features/alarmSettingSlice";

import ErrorScreen from "../screens/ErrorScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import AlarmSettingScreen from "../screens/AlarmSettingScreen";
import QrCodeScannerScreen from "../screens/QrCodeScannerScreen";
import PrescriptionDetailScreen from "../screens/PrescriptionDetailScreen";
import PrescriptionHistoryDetailScreen from "../screens/PrescriptionHistoryDetailScreen";

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
      <Stack.Screen name="Detail" component={PrescriptionDetailScreen} />
      <Stack.Screen name="Check In" component={QrCodeScannerScreen} />
      <Stack.Screen name="Alarm Setting" component={AlarmSettingScreen} />
      <Stack.Screen name="History Detail" component={PrescriptionHistoryDetailScreen} />
      <Stack.Screen name="Error" component={ErrorScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
