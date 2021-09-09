import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, RefreshControl, StyleSheet } from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";

import PrescriptionCard from "../components/PrescriptionCard";

const DashboardScreen = ({ prescriptions }) => {
  const isLoading = useSelector(state => state.prescription.isLoading);

  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
    >
      {
        prescriptions.length
          ? prescriptions.map(prescription => {
            return <PrescriptionCard key={prescription.prescription_id} prescriptionInfo={prescription} />;
          })
          : <Text>No List yet...</Text>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default DashboardScreen;
