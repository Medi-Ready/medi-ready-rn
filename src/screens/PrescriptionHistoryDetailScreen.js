import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";

import MedicineList from "../components/MedicineList";
import HistoryStatus from "../components/shared/HistoryStatus";
import PrescriptionGuide from "../components/PrescriptionGuide";

const PrescriptionHistoryDetailScreen = ({ route }) => {
  const {
    medicines,
    description,
    pharmacyName,
    doseHistories,
    pharmacistName,
    expirationDate,
    pharmacyAddress,
    prescriptionDate,
    pharmacistPicture,
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pharmacyInfo}>
        <Text style={styles.name}>{pharmacyName}</Text>
        <Text style={styles.address}>{pharmacyAddress}</Text>
        <Text style={styles.date}>{`${prescriptionDate} - ${expirationDate}`}</Text>
      </View>

      <View style={styles.pharmacistInfo}>
        <Image
          style={styles.pharmacistProfilePicture}
          source={{
            uri: pharmacistPicture,
          }}
        />
        <Text>{`${pharmacistName} 약사`}</Text>
      </View>

      <MedicineList medicines={medicines} />
      <PrescriptionGuide description={description} />

      <View style={styles.historyStatus}>
        <HistoryStatus expirationDate={expirationDate} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  pharmacyInfo: {
    marginLeft: 5,
  },
  name: {
    fontSize: 30,
  },
  date: {
    marginTop: 10,
    fontSize: 15,
  },
  address: {
    marginTop: 10,
    fontSize: 18,
  },
  pharmacistInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  pharmacistProfilePicture: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
    resizeMode: "contain",
    borderRadius: 50,
  },
  historyStatus: {
    position: "absolute",
    right: 0,
    top: 8,
  },
});

export default PrescriptionHistoryDetailScreen;
