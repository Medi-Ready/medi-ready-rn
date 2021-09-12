import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";

import DoseDays from "../components/DoseDays";

const DetailScreen = ({ route }) => {
  const {
    isAlarmOn,
    medicines,
    description,
    pharmacyName,
    doseHistories,
    pharmacistName,
    expirationDate,
<<<<<<< HEAD
=======
    prescriptionId,
>>>>>>> 2d3b56f (Feat: modify file structure)
    pharmacyAddress,
    prescriptionDate,
    pharmacistPicture,
  } = route.params;
<<<<<<< HEAD
=======

  const handlePrescriptionDelete = () => {

  };
>>>>>>> 2d3b56f (Feat: modify file structure)

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.pharmacyInfo}>
          <Text numberOfLines={1} style={styles.pharmacyName}>{pharmacyName}</Text>
          <MaterialCommunityIcons name="pencil-outline" size={24} color="blue" />
        </View>

        <Text style={styles.prescriptionDate}>{`${prescriptionDate} - ${expirationDate}`}</Text>

<<<<<<< HEAD
<<<<<<< HEAD
=======

        <View>
          <View>
            <Text>약 목록</Text>
          </View>

          <View>

          </View>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handlePrescriptionDelete}
        >
          <Text style={styles.deleteButtonText}>Delete this Prescription</Text>
        </TouchableOpacity>
>>>>>>> 2d3b56f (Feat: modify file structure)
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
=======
    alignItems: "center",
>>>>>>> 2d3b56f (Feat: modify file structure)
    marginHorizontal: 10,
  },
  pharmacyInfo: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  pharmacyName: {
    maxWidth: 250,
    marginBottom: 15,
    fontSize: 30,
  },
  prescriptionDate: {
    fontSize: 15,
    marginTop: 10,
<<<<<<< HEAD
    textAlign: "right",
=======
    marginBottom: 30,
    textAlign: "right",
  },
  doseGuide: {
    minHeight: 200,
    marginTop: 30,
    padding: 20,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  },
  deleteButton: {
    marginTop: 30,
    marginHorizontal: 100,
  },
  deleteButtonText: {
    fontSize: 15,
    color: "#FF0000",
>>>>>>> 2d3b56f (Feat: modify file structure)
  },
  doseGuide: {
    minHeight: 200,
    marginTop: 30,
    padding: 20,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  }
});

export default DetailScreen;
