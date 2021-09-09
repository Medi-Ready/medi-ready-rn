import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, TouchableOpacity } from "react-native";

import { setScanned } from "../redux/features/pharmacyCheckInSlice";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const QrCodeIcon = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleQrScannerOpen = () => {
    dispatch(setScanned(false));
    navigation.navigate("Check In");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleQrScannerOpen}
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
