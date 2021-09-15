import React from "react";
import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";

const HistoryStatus = ({ expirationDate }) => {
  const currentDate = dayjs();
  const isExpired = currentDate > expirationDate;

  const fontColor = isExpired ? "#FF0000" : "#4BDE97";

  return (
    <View style={isExpired ? styles.expired : styles.progress}>
      <Text style={{ color: fontColor }}>
        {isExpired ? "Expired" : "Progress"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  expired: {
    justifyContent: "center",
    alignItems: "center",
    height: 23,
    width: 65,
    borderRadius: 12,
    backgroundColor: "#FFE5E5",
  },
  progress: {
    justifyContent: "center",
    alignItems: "center",
    height: 23,
    width: 65,
    borderRadius: 12,
    backgroundColor: "#EDFCF5",
  },
});

export default HistoryStatus;
