import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "../screens/LoginScreen";
import MainNavigator from "./MainNavigator";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  const isSignedIn = true;

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {
          isSignedIn
            ? <AppStack.Screen
              name="Home"
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
