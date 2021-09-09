import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, Text, View, Button } from "react-native";
import { openScanner, checkIn, setScanned } from "../redux/features/pharmacyCheckInSlice";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const QrCodeScannerScreen = ({ navigation }) => {
  const hasPermission = useSelector((state) => state.pharmacyCheckIn.hasPermission);
  const scanned = useSelector((state) => state.pharmacyCheckIn.scanned);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openScanner());
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    dispatch(checkIn(data));
  };

  const closeScanner = () => {
    dispatch(setScanned(false));
    navigation.goBack();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={"CHECKED IN!"} onPress={closeScanner} />}
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
