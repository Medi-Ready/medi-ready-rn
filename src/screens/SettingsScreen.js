import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";

import { logout } from "../redux/features/userSlice";

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const googleLogout = () => {
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
