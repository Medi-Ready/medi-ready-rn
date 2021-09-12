import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";

import PrescriptionHistoryCard from "../components/PrescriptionHistoryCard";

const PrescriptionHistoryScreen = ({ navigation }) => {
  const isLoading = useSelector(state => state.prescription.isLoading);
  const prescriptionList = useSelector((state) => state.prescription.prescriptionList);

  const dispatch = useDispatch();

  useEffect(() => {
    return navigation.addListener("focus", () => {
      dispatch(getPrescriptionList());
    });
  }, [navigation]);

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  const renderItem = ({ item }) => <PrescriptionHistoryCard prescriptionInfo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.prescriptionList}
        data={prescriptionList}
        renderItem={renderItem}
        keyExtractor={prescription => `${prescription.prescription_id}history`}
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
  prescriptionList: {
    flex: 1,
  },
});

export default PrescriptionHistoryScreen;
