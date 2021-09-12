import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { checkAuthentication } from "../redux/features/userSlice";

import MainNavigator from "./MainNavigator";
import LoginScreen from "../screens/LoginScreen";
import ErrorScreen from "../screens/ErrorScreen";
import LoadingScreen from "../screens/LoadingScreen";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  const error = useSelector((state) => state.user.error);
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLoading = useSelector((state) => state.user.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {userInfo
          ? <AppStack.Screen
            name="MainNavigator"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
          : <AppStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />}
      </AppStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNavigator;
