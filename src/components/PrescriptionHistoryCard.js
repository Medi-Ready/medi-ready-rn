import React from "react";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import HistoryStatus from "./HistoryStatus";

const PrescriptionHistoryCard = ({ prescriptionInfo }) => {
  const navigation = useNavigation();

  const {
    medicines,
    description,
    created_at: prescriptionDateUTC,
    expiration_date: expirationDateUTC,
    dose_histories: doseHistories,
    is_alarm_on: isAlarmOn,
    pharmacist: {
      pharmacy_name: pharmacyName,
      pharmacy_address: pharmacyAddress,
      user: {
        name: pharmacistName,
        picture: pharmacistPicture,
      },
    },
  } = prescriptionInfo;

  const prescriptionDate = dayjs(prescriptionDateUTC).add(9, "hour").format("YYYY.MM.DD");
  const expirationDate = dayjs(expirationDateUTC).add(9, "hour").format("YYYY.MM.DD");

  const firstDisplayMedicine = medicines[0]?.medicine_detail.name;
  const secondDisplayMedicine = medicines[1]?.medicine_detail.name;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("History Detail", {
        medicines,
        description,
        pharmacyName,
        doseHistories,
        pharmacistName,
        expirationDate,
        pharmacyAddress,
        prescriptionDate,
        pharmacistPicture,
      })}
    >
      <View>
        <Text style={styles.title}>{pharmacyName}</Text>
        <Text style={styles.address}>{pharmacyAddress}</Text>
        <Text style={styles.date}>{`${prescriptionDate} - ${expirationDate}`}</Text>

        <View style={styles.medicineList}>
          <View style={styles.medicine}>
            <Text style={styles.medicineName} numberOfLines={1}>
              {firstDisplayMedicine}
            </Text>
          </View>

          <View style={styles.medicine}>
            <Text style={styles.medicineName} numberOfLines={1}>
              {secondDisplayMedicine}
            </Text>
          </View>

          <Text>...</Text>
        </View>
      </View>

      <HistoryStatus expirationDate={expirationDate} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    height: 200,
    width: 350,
    marginTop: 20,
    paddingLeft: 30,
    borderRadius: 12,
    backgroundColor: "#D6D6D6",
  },
  title: {
    fontSize: 30,
  },
  address: {
    marginTop: 5,
    fontSize: 18,
  },
  date: {
    marginTop: 10,
  },
  medicineList: {
    flexDirection: "row",
    marginTop: 20,
  },
  medicine: {
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 100,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  medicineName: {
    maxWidth: 80,
  },
});

export default PrescriptionHistoryCard;
