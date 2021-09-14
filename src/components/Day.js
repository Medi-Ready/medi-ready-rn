import React from "react";
import dayjs from "dayjs";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Day = ({ doseHistory, selectedDoseHistory, setSelectedDoseHistory }) => {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const { date } = doseHistory;
  const { date: selectedDate } = selectedDoseHistory;

  const dayIndex = dayjs(date).day();
  const monthAndDate = dayjs(date).format("MM/DD");
  const isSelected = date === selectedDate;

  const handleSelectDay = () => {
    setSelectedDoseHistory(doseHistory);
  };

  return (
    <TouchableOpacity
      style={isSelected ? styles.selected : styles.default}
      onPress={handleSelectDay}
    >
      <Text style={isSelected ? styles.selectedMonthAndDay : styles.defaultMonthAndDay}>
        {monthAndDate}
      </Text>

      <Text style={isSelected ? styles.selectedDayOfWeek : styles.defaultDayOfWeek}>
        {dayOfWeek[dayIndex]}
      </Text>
    </TouchableOpacity>
  );
};

export default Day;

const styles = StyleSheet.create({
  default: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 50,
    margin: 7,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 2,
  },
  defaultMonthAndDay: {
    color: "#000",
  },
  defaultDayOfWeek: {
    marginTop: 5,
    color: "#000",
  },
  selected: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 50,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 10,
    backgroundColor: "#006FF3",
  },
  selectedMonthAndDay: {
    color: "#FFF",
  },
  selectedDayOfWeek: {
    marginTop: 5,
    color: "#FFF",
  },
});
