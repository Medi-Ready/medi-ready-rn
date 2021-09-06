import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Loading from "../screens/Loading";
import LoginScreen from "../screens/LoginScreen";
import MainNavigator from "./MainNavigator";
import { login, logout } from "../features/userSlice";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const token = await SecureStore.getItemAsync("token");

      token ? dispatch(login()) : dispatch(logout());

      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
