import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";

import PrescriptionCard from "../components/PrescriptionCard";

const DashboardScreen = ({ navigation }) => {
  const prescriptionList = useSelector((state) => state.prescription.prescriptionList);
  const isLoading = useSelector(state => state.prescription.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getPrescriptionList());
    });
  }, [navigation]);

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  const renderItem = ({ item }) => <PrescriptionCard prescriptionInfo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.prescriptionList}
        data={prescriptionList}
        renderItem={renderItem}
        keyExtractor={prescription => `${prescription.prescription_id}dashboard`}
        refreshing={isLoading}
        onRefresh={handleRefresh}
      />
<<<<<<< HEAD

=======
>>>>>>> 2d3b56f (Feat: modify file structure)
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
  },
  prescriptionList: {
    flex: 1,
  },
});

export default DashboardScreen;
