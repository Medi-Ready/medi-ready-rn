import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

import DoseDays from "../components/DoseDays";
import MedicineList from "../components/MedicineList";
import PrescriptionGuide from "../components/PrescriptionGuide";

const PrescriptionDetailScreen = ({ route }) => {
  const doseHistories = useSelector((state) => state.doseHistory.doseHistoryList);

  const {
    medicines,
    description,
    pharmacyName,
    expirationDate,
    prescriptionDate,
  } = route.params;

  const handlePrescriptionDelete = () => {

  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pharmacyInfo}>
          <Text numberOfLines={1} style={styles.pharmacyName}>
            {pharmacyName}
          </Text>

          <Text style={styles.prescriptionDate}>
            {`${prescriptionDate} - ${expirationDate}`}
          </Text>
        </View>

        <View style={styles.doseDays}>
          <DoseDays doseHistories={doseHistories} />
        </View>

        <View style={styles.prescriptionGuide}>
          <PrescriptionGuide description={description} />
        </View>

        <View style={styles.medicineList}>
          <MedicineList medicines={medicines} />
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handlePrescriptionDelete}
        >
          <Text style={styles.deleteButtonText}>Delete this Prescription</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  pharmacyInfo: {
    marginTop: 30,
    marginHorizontal: 20,
    borderBottomWidth: 1,
  },
  pharmacyName: {
    fontSize: 35,
    fontWeight: "700",
  },
  prescriptionDate: {
    fontSize: 15,
    marginVertical: 20,
    textAlign: "left",
  },
  doseDays: {
    marginTop: 25,
  },
  prescriptionGuide: {
    marginTop: 70,
  },
  medicineList: {
    marginTop: 25,
  },
  deleteButton: {
    marginVertical: 30,
    marginHorizontal: 100,
  },
  deleteButtonText: {
    fontSize: 15,
    color: "#FF0000",
  },
});

export default PrescriptionDetailScreen;
