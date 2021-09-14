import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, Text, View, Button } from "react-native";
import { openScanner, checkIn } from "../redux/features/pharmacyCheckInSlice";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import LoadingScreen from "./LoadingScreen";

const QrCodeScannerScreen = ({ navigation }) => {
  const error = useSelector((state) => state.pharmacyCheckIn.error);
  const scanned = useSelector((state) => state.pharmacyCheckIn.scanned);
  const isLoading = useSelector((state) => state.pharmacyCheckIn.isLoading);
  const hasPermission = useSelector((state) => state.pharmacyCheckIn.hasPermission);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(openScanner());
    });
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    dispatch(checkIn(data));
  };

  if (hasPermission === null || isLoading) {
    return <LoadingScreen />;
  }

  if (hasPermission === false) {
    navigation.navigate("Error", { errorMessage: "No Permission" });
  }

  if (error) {
    navigation.navigate("Error", { errorMessage: error.message });
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={!scanned && handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={"CHECKED IN!"} onPress={() => navigation.goBack()} />}
      <MaterialCommunityIcons name="scan-helper" size={200} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QrCodeScannerScreen;
