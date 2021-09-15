import React, { useState } from "react";
import { Switch } from "react-native";

const AlarmSwitch = ({ isAlarmOn, doseHistories, prescriptionId }) => {
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(isAlarmOn);

  const toggleSwitch = () => {
    setIsAlarmEnabled((previousState) => !previousState);
  };

  return (
    <Switch
      onValueChange={toggleSwitch}
      value={isAlarmEnabled}
    />
  );
};

export default AlarmSwitch;
