import React from "react";
import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";

const HistoryStatus = ({ createdAt }) => {
  const currentDate = dayjs();
  const prescriptionDate = dayjs(createdAt).add(7, "hour");
  const dateDifference = prescriptionDate.diff(currentDate);

  const fontColor = dateDifference ? "#FF0000" : "#4BDE97";

  return (
    <View style={dateDifference ? styles.expired : styles.progress}>
      <Text style={{ color: fontColor }}>{dateDifference ? "Expired" : "Progress"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  expired: {
    position: "absolute",
    right: 12,
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 23,
    width: 65,
    borderRadius: 12,
    backgroundColor: "#FFE5E5",
  },
  progress: {
    position: "absolute",
    right: 12,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 23,
    width: 65,
    borderRadius: 12,
    backgroundColor: "#EDFCF5",
  },
});

export default HistoryStatus;
