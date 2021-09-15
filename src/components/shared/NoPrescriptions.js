import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoPrescriptions = () => {
  return (
    <View style={styles.container}>
      <Text>아직 처방전을 받지 않았습니다!</Text>
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

export default NoPrescriptions;
