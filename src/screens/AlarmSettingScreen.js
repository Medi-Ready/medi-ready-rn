import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  Keyboard,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { saveAlarm } from "../redux/features/alarmSettingSlice";
import TimeSettingInput from "../components/TimeSettingInput";

const AlarmTimeSettingScreen = () => {
  const dosePeriodList = ["morning", "lunch", "dinner", "beforeBed"];
  const dosePeriodTitleList = ["아침", "점심", "저녁", "취침전"];

  const alarmTimeList = useSelector((state) => state.alarmSetting.alarmTimeList);

  const dispatch = useDispatch();

  const handleAlarmTimeSubmit = () => {
    dispatch(saveAlarm(alarmTimeList));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "height" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View style={styles.inner}>
          <Text style={styles.title}>알림 설정</Text>
          <Text>원하는 시간대에 알림을 설정해 주세요!</Text>

          <View style={styles.setAlarmContainer}>
            {dosePeriodList.map((dosePeriod, index) => {
              return (
                <TimeSettingInput
                  key={`${index}-${dosePeriod}`}
                  dosePeriod={dosePeriod}
                  dosePeriodTitle={dosePeriodTitleList[index]}
                />
              );
            })}
          </View>

          <Pressable
            style={styles.saveButton}
            onPress={handleAlarmTimeSubmit}
          >
            <Text>저장</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback >
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 30,
  },
  inner: {
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
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default AlarmTimeSettingScreen;
