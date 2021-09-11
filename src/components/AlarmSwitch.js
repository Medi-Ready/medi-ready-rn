import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";

const AlarmSwitch = ({ isAlarmOn }) => {
  const [alarmEnabled, setAlarmEnabled] = useState(isAlarmOn);

  const toggleSwitch = () => {
    setAlarmEnabled((previousState) => !previousState);
  };

  return (
    <Switch
      style={styles.alarmSwitch}
      onValueChange={toggleSwitch}
      value={alarmEnabled}
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

