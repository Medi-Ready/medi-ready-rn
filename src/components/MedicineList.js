import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MedicineList = ({ medicines }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>처방 약</Text>
      {medicines.map((medicine) => {
        return (
          <View style={styles.medicineNameBox} key={medicine.medicine_id}>
            <Text numberOfLines={1}>
              {medicine.medicine_detail.itemName}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    width: 320,
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: "800",
  },
  medicineNameBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 320,
    marginBottom: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default MedicineList;
