import React, { useState } from "react";
import dayjs from "dayjs";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Day from "./Day";
import Pills from "./Pills";

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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.weekView} horizontal={true}>
        {doseHistories.map((doseHistory) => {
          const { dose_history_id: doseHistoryId } = doseHistory;

          return (
            <Day
              key={doseHistoryId}
              doseHistory={doseHistory}
              selectedDoseHistory={selectedDoseHistory}
              setSelectedDoseHistory={setSelectedDoseHistory}
            />
          );
        })}
      </ScrollView>

      <View style={styles.doseMarkContainer}>
        <View style={styles.dosePeriod}>
          <Text>아침</Text>
          <View style={styles.pillIcon}>
            <Pills isCompleteDose={morning} />
          </View>
        </View>

        <View style={styles.dosePeriod}>
          <Text>점심</Text>
          <View style={styles.pillIcon}>
            <Pills isCompleteDose={lunch} />
          </View>
        </View>

        <View style={styles.dosePeriod}>
          <Text>저녁</Text>
          <View style={styles.pillIcon}>
            <Pills isCompleteDose={dinner} />
          </View>
        </View>

        <View style={styles.dosePeriod}>
          <Text>취침전</Text>
          <View style={styles.pillIcon}>
            <Pills isCompleteDose={beforeBed} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  weekView: {
    flexDirection: "row",
  },
  doseMarkContainer: {
    flexDirection: "row",
    height: 20,
    marginTop: 25,
  },
  dosePeriod: {
    height: 100,
    marginRight: 30,
    marginLeft: 30,
  },
  pillIcon: {
    marginTop: 15,
  },
});

export default DoseDays;
