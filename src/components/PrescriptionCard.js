import React from "react";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AlarmSwitch from "./AlarmSwitch";

  const {
    medicines,
    description,
    is_alarm_on: isAlarmOn,
    dose_histories: doseHistories,
    created_at: prescriptionDateUTC,
    prescription_id: prescriptionId,
    expiration_date: expirationDateUTC,
    pharmacist: {
      pharmacy_name: pharmacyName,
      pharmacy_address: pharmacyAddress,
      user: {
        name: pharmacistName,
        picture: pharmacistPicture,
      },
    },
  } = prescriptionInfo;

  const expirationDate = dayjs(expirationDateUTC).add(9, "hour").subtract(1, "day").format("YYYY.MM.DD");
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
<<<<<<< HEAD
=======
        prescriptionId,
>>>>>>> 528fd00 (Chore: fix git conflict)
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


export default PrescriptionCard;
