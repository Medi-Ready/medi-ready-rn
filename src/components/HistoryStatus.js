import React from "react";
import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";

const HistoryStatus = ({ createdAt }) => {
  const currentDate = dayjs();
  const prescriptionDate = dayjs(createdAt);
  const dateDifference = prescriptionDate.diff(currentDate);

  return (
    <>
      {
        dateDifference
          ?
          <View style={styles.expired}>
            <Text style={styles.expiredText}>Expired</Text>
          </View>
          :
          <View style={styles.progress}>
            <Text style={styles.progressText}>Progress</Text>
          </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  expired: {
    position: "absolute",
    right: 12,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 23,
    width: 65,
    borderRadius: 12,
    backgroundColor: "#FFE5E5",
  },
  expiredText: {
    color: "#FF0000",
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
  progressText: {
    color: "#4BDE97",
  },
});

export default HistoryStatus;
