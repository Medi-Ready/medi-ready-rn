import React from "react";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AlarmSwitch from "./AlarmSwitch";

const PrescriptionCard = ({ prescriptionInfo }) => {
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

  const expirationDate = dayjs(expirationDateUTC).add(9, "hour").format("YYYY.MM.DD");
  const prescriptionDate = dayjs(prescriptionDateUTC).add(9, "hour").format("YYYY.MM.DD");

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", {
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
      })}
    >
      <View>
        <Text style={styles.title}>{pharmacyName}</Text>
        <Text style={styles.date}>{`${prescriptionDate} - ${expirationDate}`}</Text>
      </View>

      <AlarmSwitch isAlarmOn={isAlarmOn} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 150,
    width: 350,
    marginTop: 20,
    padding: 30,
    borderRadius: 12,
    backgroundColor: "#D6D6D6",
  },
  title: {
    fontSize: 30,
  },
  date: {
    marginTop: 20,
  },
});

export default PrescriptionCard;
