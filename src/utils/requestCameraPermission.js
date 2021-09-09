import { BarCodeScanner } from "expo-barcode-scanner";

const requestCameraPermissions = async () => {
  const { status } = await BarCodeScanner.requestPermissionsAsync();

  return status === "granted" ? true : false;
};

export default requestCameraPermissions;
