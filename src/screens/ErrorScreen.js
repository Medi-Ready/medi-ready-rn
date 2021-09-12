import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ERROR</Text>
      <Text>{error.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ErrorScreen;
