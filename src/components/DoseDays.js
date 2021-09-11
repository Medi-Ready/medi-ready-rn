import React from "react";
import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";

const DoseDays = ({ createdAt, expirationDate }) => {
  const daysInWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <View style={styles.container}>
      {daysInWeek.map((day) => {
        return (
          <View >
            <Text>{day}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: "#000",
  },
});

export default DoseDays;

