import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Pills = ({ isCompleteDose }) => {
  const [isComplete, setIsComplete] = useState(isCompleteDose);

  const handlePillPress = () => {
    //send fetch
    setIsComplete((prev) => !prev);
  };

  return (
    <TouchableOpacity onPress={handlePillPress}>
      {isComplete
        ? <MaterialCommunityIcons name="pill" size={30} color="blue" />
        : <MaterialCommunityIcons name="pill" size={30} color="black" />}
    </TouchableOpacity>
  );
};

export default Pills;
