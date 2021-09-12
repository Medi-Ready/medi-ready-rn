import React from "react";
import { useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import { login } from "../redux/features/userSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(login());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={(signInWithGoogle)}>
        <Ionicons name="logo-google" size={24} color="#FFFF" />
        <Text style={styles.loginButtonText}>Google Login</Text>
      </TouchableOpacity>

    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#006FF3",
  },
  logo: {
    marginTop: 200,
    width: 150,
    height: 150,
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 200,
    marginTop: 200,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  loginButtonText: {
    fontSize: 20,
    marginLeft: 20,
    color: "#FFFF",
  },
});

export default LoginScreen;
