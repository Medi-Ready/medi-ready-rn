import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";
import * as SecureStore from "expo-secure-store";

import { logout } from "../features/userSlice";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const googleLogout = async () => {
    await SecureStore.deleteItemAsync("token");

    dispatch(logout());
  };

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Logout" onPress={googleLogout} />
    </View>
  );
};

export default SettingsScreen;
