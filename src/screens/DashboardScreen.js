import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";

import NoPrescriptions from "../components/shared/NoPrescriptions";
import PrescriptionAlarmList from "../components/PrescriptionAlarmList";

const DashboardScreen = ({ navigation }) => {
  const error = useSelector((state) => state.prescription.error);
  const isLoading = useSelector(state => state.prescription.isLoading);
  const prescriptionList = useSelector((state) => state.prescription.prescriptionList);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getPrescriptionList());
    });
  }, [navigation]);

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  if (error) {
    navigation.navigate("Error", { errorMessage: error.message });
  }

  if (!prescriptionList.length) {
    return <NoPrescriptions />;
  }

  return (
    <View style={styles.container}>
      <PrescriptionAlarmList
        isLoading={isLoading}
        handleRefresh={handleRefresh}
        prescriptionList={prescriptionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default DashboardScreen;
