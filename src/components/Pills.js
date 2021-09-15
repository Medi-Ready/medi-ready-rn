import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { updateDoseHistories, setSelectedDoseHistory } from "../redux/features/doseHistorySlice";

const Pills = ({ dosePeriod }) => {
  const selectedDoseHistory = useSelector((state) => state.doseHistory.selectedDoseHistory);

  const { dose_history_id: doseHistoryId } = selectedDoseHistory;

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
      time = "before_bed";
      break;
  }

  const [isCompetedDose, setIsCompletedDose] = useState(selectedDoseHistory[time]);

  useEffect(() => {
    setIsCompletedDose(selectedDoseHistory[time]);
  }, [selectedDoseHistory]);

  const dispatch = useDispatch();

  const handlePillPress = () => {
    const newHistory = {};

    newHistory[time] = !selectedDoseHistory[time];

    setIsCompletedDose((prev) => !prev);

    const newDoseHistory = { ...selectedDoseHistory, ...newHistory };

    dispatch(setSelectedDoseHistory(newDoseHistory));
    dispatch(updateDoseHistories({ doseHistoryId, newDoseHistory }));
  };

  return (
    <TouchableOpacity onPress={handlePillPress}>
      {isCompetedDose
        ? <MaterialCommunityIcons name="pill" size={30} color="#006FF3" />
        : <MaterialCommunityIcons name="pill" size={30} color="#000" />}
    </TouchableOpacity>
  );
};

export default Pills;
