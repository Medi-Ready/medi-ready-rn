import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";

import HistoryStatus from "../components/HistoryStatus";

const HistoryDetailScreen = ({ route }) => {
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
      <View>
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

      <View style={styles.medicineList}>
        <Text>약 이름</Text>
        {medicines.map((medicine) => {
          return (
            <View key={medicine.medicine_id} style={styles.medicineName}>
              <Text>
                {medicine.medicine_detail.name}
              </Text>
            </View>);
        })}
      </View>

      <View style={styles.prescriptionGuide}>
        <Text>{description}</Text>
      </View>

      <HistoryStatus expirationDate={expirationDate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
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
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  pharmacistProfilePicture: {
    width: 25,
    height: 25,
    marginRight: 10,
    resizeMode: "contain",
    borderRadius: 50,
  },
  medicineList: {
    marginTop: 40,
  },
  medicineName: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: "gray",
  },
  prescriptionGuide: {
    height: 80,
    marginTop: 30,
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default HistoryDetailScreen;
