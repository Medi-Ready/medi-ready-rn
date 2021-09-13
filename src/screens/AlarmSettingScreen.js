import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { saveAlarm, failAlarmSetting } from "../redux/features/alarmSettingSlice";

import TimeSettingInput from "../components/TimeSettingInput";

const AlarmTimeSettingScreen = () => {
  const dosePeriodTitleList = ["아침", "점심", "저녁", "취침전"];
  const dosePeriodList = ["morning", "lunch", "dinner", "beforeBed"];

  const error = useSelector((state) => state.alarmSetting.error);
  const isLoading = useSelector((state) => state.alarmSetting.isLoading);
  const alarmTimes = useSelector((state) => state.alarmSetting.alarmTimes);

  const dispatch = useDispatch();

  const handleAlarmTimeSubmit = () => {
    const isEmpty = Object.values(alarmTimes).some(time => {
      return time === null || time === "";
    });

    !isEmpty
      ? dispatch(saveAlarm(alarmTimes))
      : dispatch(failAlarmSetting("새로운 알람 시간을 모두 입력해 주십시요"));
  };

  return (
    <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>알림 설정</Text>
        <Text>원하는 시간대에 알림을 설정해 주세요!</Text>

        <View style={styles.setAlarmContainer}>
          {dosePeriodList.map((dosePeriod, index) => {
            return (
              <TimeSettingInput
                key={`${index}-${dosePeriod}`}
                dosePeriod={dosePeriod}
                dosePeriodTitle={dosePeriodTitleList[index]}
                alarmTime={alarmTimes[dosePeriod]}
              />
            );
          })}
        </View>

        <Button
          title="저장"
          type="outline"
          loading={isLoading}
          buttonStyle={styles.saveButton}
          onPress={handleAlarmTimeSubmit}
        />

        {error && <Text style={styles.errorMessage}>{error}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 3,
  },
  container: {
    position: "relative",
    marginTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
  },
  setAlarmContainer: {
    marginTop: 10,
  },
  saveButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  errorMessage: {
    color: "red",
    marginTop: 20,
  },
});

export default AlarmTimeSettingScreen;
