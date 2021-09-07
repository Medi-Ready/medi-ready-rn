import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainNavigator from "./MainNavigator";
import LoginScreen from "../screens/LoginScreen";
import { checkAuthentication } from "../redux/features/userSlice";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  const dispatch = useDispatch();
  dispatch(checkAuthentication());

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {
          isSignedIn
            ? <AppStack.Screen
              name="Main"
              component={MainNavigator}
              options={{ headerShown: false }}
            />
            : <AppStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
        }
      </AppStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default AppNavigator;
