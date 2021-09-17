import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { lightTheme } from "../theme/navigationTheme";
import { checkAuthentication } from "../redux/features/userSlice";

import MainNavigator from "./MainNavigator";
import LoginScreen from "../screens/LoginScreen";
import LoadingScreen from "../screens/LoadingScreen";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const isLoading = useSelector((state) => state.user.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer theme={lightTheme}>
      <AppStack.Navigator>
        {userInfo ? (
          <AppStack.Screen
            name="MainNavigator"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <AppStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </AppStack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNavigator;
