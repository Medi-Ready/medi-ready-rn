import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Text, StyleSheet, View, TextInput } from "react-native";

import { setAlarm } from "../redux/features/alarmSettingSlice";

const TimeSettingInput = ({ dosePeriod, dosePeriodTitle, alarmTime }) => {
  const [hour, setHour] = useState(alarmTime.split(":")[0]);
  const [minute, setMinute] = useState(alarmTime.split(":")[1]);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (hour.length === 2 && minute.length === 2) {
      const alarmTime = `${hour}:${minute}`;

      dispatch(setAlarm({ dosePeriod, alarmTime }));
    }
  }, [hour, minute, dispatch]);

  const handleHourChange = (hourInput) => {
    if (Number(hourInput[0]) > 2 || Number(hourInput) > 23) {
      setError(true);
      setErrorMessage("24시 이전만 입력할 수 있습니다!");
    } else {
      setError(false);
      setHour(hourInput);
    }
  };

  const handleMinuteChange = (minuteInput) => {
    if (Number(minuteInput[0]) > 6 || Number(minuteInput) >= 60) {
      setError(true);
      setErrorMessage("60분 이전만 입력할 수 있습니다!");
    } else {
      setError(false);
      setMinute(minuteInput);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.title}>{dosePeriodTitle}</Text>
        </View>

        <TextInput
          maxLength={2}
          value={hour}
          placeholder={hour}
          textAlign="center"
          style={styles.timeInput}
          keyboardType="number-pad"
          onChangeText={handleHourChange}
        />

        <Text>:</Text>

        <TextInput
          maxLength={2}
          value={minute}
          placeholder={minute}
          textAlign="center"
          style={styles.timeInput}
          keyboardType="number-pad"
          onChangeText={handleMinuteChange}
        />
      </View>

      {error && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingVertical: 30,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  inputLabel: {
    minWidth: 70,
  },
  input: {
    height: 40,
    width: 50,
  },
  timeInput: {
    marginHorizontal: 8,
    padding: 5,
    height: 40,
    width: 60,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
  },
  errorMessage: {
    position: "absolute",
    color: "red",
    bottom: 0,
    right: 30,
  },
});

export default TimeSettingInput;
