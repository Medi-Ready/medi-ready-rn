import React from "react";
import { View, ScrollView, Text, TextInput, StyleSheet } from "react-native";

const HistoryDetailScreen = ({ route }) => {
  const { prescriptionInfo, prescriptionDate } = route.params;
  const { pharmacist, medicines } = prescriptionInfo;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{pharmacist.pharmacy_name}</Text>
      <Text style={styles.address}>{pharmacist.pharmacy_address}</Text>
      <Text style={styles.date}>{prescriptionDate}</Text>

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

      <TextInput
        style={styles.prescriptionGuide}
        value="take the medicine 3 times a day"
      />
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
  medicineList: {
    marginTop: 40,
  },
  medicineName: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: "gray",
  },
  prescriptionGuide: {
    marginTop: 30,
    height: 80,
  },
});

export default HistoryDetailScreen;
