import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

const AlarmSwitch = ({ isAlarmOn }) => {
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(isAlarmOn);

  const toggleSwitch = () => {
    setIsAlarmEnabled((previousState) => !previousState);
  };

  return (
    <Switch
      style={styles.alarmSwitch}
      onValueChange={toggleSwitch}
      value={isAlarmEnabled}
    />
  );
};

const styles = StyleSheet.create({
  alarmSwitch: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});

export default AlarmSwitch;

