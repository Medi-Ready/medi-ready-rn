import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const QrCodeIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Check In")}
    >
      <MaterialCommunityIcons name="qrcode-scan" size={24} color="blue" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});

export default QrCodeIcon;
