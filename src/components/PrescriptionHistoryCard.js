import React from "react";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import HistoryStatus from "./HistoryStatus";

const PrescriptionHistoryCard = ({ prescriptionInfo }) => {
  const navigation = useNavigation();

  const { created_at: createdAt, medicines } = prescriptionInfo;
  const {
    pharmacy_name: pharmacyName,
    pharmacy_address: pharmacyAddress,
  } = prescriptionInfo.pharmacist;

  const prescriptionDate = dayjs(createdAt).format("YYYY.MM.DD");

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("History Detail", { prescriptionInfo })}
    >
      <View>
        <Text style={styles.title}>{pharmacyName}</Text>
        <Text style={styles.address}>{pharmacyAddress}</Text>
        <Text style={styles.date}>{prescriptionDate}</Text>

        <View style={styles.medicineList}>
          <View style={styles.medicine}>
            <Text>타이레놀</Text>
          </View>

          <View style={styles.medicine}>
            <Text>졸피뎀</Text>
          </View>

          <Text>...</Text>
        </View>
      </View>

      <HistoryStatus style={styles.status} createdAt={createdAt} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
    marginBottom: 15,
    padding: 30,
    borderRadius: 12,
    backgroundColor: "#D6D6D6",
    shadowColor: "black",
  },
  title: {
    fontSize: 30,
  },
  address: {
    fontSize: 18,
    marginTop: 5,
  },
  date: {
    marginTop: 10,
  },
  medicineList: {
    flexDirection: "row",
    marginTop: 10,
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
  status: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default PrescriptionHistoryCard;
