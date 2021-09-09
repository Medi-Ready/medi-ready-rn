import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  const { prescriptionInfo, prescriptionName } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text>{prescriptionName}</Text>
        <Text>{prescriptionInfo.created_at}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default DetailScreen;
