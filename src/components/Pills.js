import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Pills = ({ dosePeriod, doseStatus, setDoseStatus }) => {
  let time = null;

  switch (dosePeriod) {
    case "아침":
      time = "morning";
      break;
    case "점심":
      time = "lunch";
      break;
    case "저녁":
      time = "dinner";
      break;
    case "취침전":
      time = "beforeBed";
      break;
  }

  const isCompletedDose = doseStatus[time];

  const handlePillPress = () => {
    //send fetch
    setDoseStatus((prev) => {
      const status = {};

      for (const [key, value] of Object.entries(doseStatus)) {
        if (key === time) {
          status[key] = !value;
        }
      }

      return { ...prev, ...status };
    });
  };

  return (
    <TouchableOpacity onPress={handlePillPress}>
      {isCompletedDose
        ? <MaterialCommunityIcons name="pill" size={30} color="#006FF3" />
        : <MaterialCommunityIcons name="pill" size={30} color="#000" />}
    </TouchableOpacity>
  );
};

export default Pills;
