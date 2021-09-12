import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";
import PrescriptionHistoryCard from "../components/PrescriptionHistoryCard";

const PrescriptionHistoryScreen = () => {
  const isLoading = useSelector(state => state.prescription.isLoading);
  const prescriptionList = useSelector((state) => state.prescription.prescriptionList);

  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  const renderItem = ({ item }) => <PrescriptionHistoryCard prescriptionInfo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={prescriptionList}
        renderItem={renderItem}
        keyExtractor={prescription => prescription.prescription_id}
        refreshing={isLoading}
        onRefresh={handleRefresh}
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

export default PrescriptionHistoryScreen;
