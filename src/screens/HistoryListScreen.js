import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, StyleSheet, RefreshControl } from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";
import PrescriptionHistoryCard from "../components/PrescriptionHistoryCard";

const PrescriptionHistoryScreen = () => {
  const isLoading = useSelector(state => state.prescription.isLoading);
  const prescriptionList = useSelector((state) => state.prescription.prescriptionList);

  const prescriptionHistory = prescriptionList.filter((prescription) => {
    return prescription.is_custom === false;
  });

  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={handleRefresh}
          />}
      >
        {prescriptionHistory.map((prescription) => {
          return <PrescriptionHistoryCard
            key={prescription.prescription_id}
            prescriptionInfo={prescription}
          />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default PrescriptionHistoryScreen;
