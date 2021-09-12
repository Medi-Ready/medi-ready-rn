import React from "react";
import dayjs from "dayjs";
import { StyleSheet, View, Text } from "react-native";

import Day from "./Day";

const DoseDays = ({ doseHistories }) => {
  const selectedDay = dayjs().format("MM/DD");

  const daysInWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <View style={styles.container}>
      <View>
        <Text>{selectedDay}</Text>
      </View>

      <View style={styles.weekView}>
        {daysInWeek.map((day) => <Day day={day} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  weekView: {
    flexDirection: "row",
  }
});

export default DoseDays;

