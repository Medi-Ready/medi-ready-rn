import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import dayjs from "dayjs";

import DayOfWeek from "./DayOfWeek";
import DoseChecker from "./DoseChecker";

const DoseDays = ({ doseHistories }) => {
  const today = dayjs().format("YYYY-MM-DD");
  const todayDoseHistory = doseHistories.find((doseHistory) => doseHistory.date === today);

  const [selectedDoseHistory, setSelectedDoseHistory] = useState(todayDoseHistory);

  const {
    morning,
    lunch,
    dinner,
    before_bed: beforeBed,
  } = selectedDoseHistory;

  const [doseStatus, setDoseStatus] = useState({ morning, lunch, dinner, beforeBed });

  useEffect(() => {
    setDoseStatus({ morning, lunch, dinner, beforeBed });
  }, [selectedDoseHistory]);

  return (
    <View style={styles.container}>
      <DayOfWeek
        doseHistories={doseHistories}
        selectedDoseHistory={selectedDoseHistory}
        setSelectedDoseHistory={setSelectedDoseHistory}
      />

      <DoseChecker
        doseStatus={doseStatus}
        setDoseStatus={setDoseStatus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default DoseDays;
