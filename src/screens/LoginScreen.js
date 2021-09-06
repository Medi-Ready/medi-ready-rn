import React from "react";
import { useDispatch } from "react-redux";

import * as Google from "expo-google-app-auth";
import * as SecureStore from "expo-secure-store";

import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import CLIENT_ID from "../config/auth";
import { login } from "../features/userSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync(CLIENT_ID);

      if (result.type === "success") {
        const { name, email, photoUrl } = result;

        const userData = {
          user_type: "patient",
          picture: photoUrl,
          name,
          email,
        };

        const response = fetch("/api/login", {
          method: "POST",
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          //error
        }

        const { user, token } = await response.result;

        dispatch(login());

        await SecureStore.setItemAsync("token", token);
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      return { error };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>LOGO</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={signInWithGoogle}>
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
