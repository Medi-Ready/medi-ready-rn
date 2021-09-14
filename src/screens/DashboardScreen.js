import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";

import PrescriptionAlarmList from "../components/PrescriptionAlarmList";

const DashboardScreen = ({ navigation }) => {
  const prescriptionList = useSelector((state) => state.prescription.prescriptionList);
  const isLoading = useSelector(state => state.prescription.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(getPrescriptionList());
    });
  }, [navigation]);

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  return (
    <SafeAreaView style={styles.container}>
      <PrescriptionAlarmList
        isLoading={isLoading}
        handleRefresh={handleRefresh}
        prescriptionList={prescriptionList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default DashboardScreen;
