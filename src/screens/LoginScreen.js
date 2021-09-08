import React from "react";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { login } from "../redux/features/userSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>LOGO</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={(signInWithGoogle)}>
        <Ionicons name="logo-google" size={24} color="black" />
        <Text style={styles.loginButtonText}>Google Login</Text>
      </TouchableOpacity>

    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0061F7",
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 200,
    borderRadius: 5,
    backgroundColor: "#FFF",
    color: "#FFF",
  },
  loginButtonText: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default LoginScreen;
