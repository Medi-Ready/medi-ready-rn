import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView, View, Text, StyleSheet, Img } from "react-native";

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
    pharmacyAddress,
    prescriptionDate,
    pharmacistPicture,
  } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.pharmacyInfo}>
          <Text numberOfLines={1} style={styles.pharmacyName}>{pharmacyName}</Text>
          <MaterialCommunityIcons name="pencil-outline" size={24} color="blue" />
        </View>

        <Text style={styles.prescriptionDate}>{`${prescriptionDate} - ${expirationDate}`}</Text>

        <DoseDays/>

        <View style={styles.doseGuide}>
          <Text>
            {description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textAlign: "right",
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
