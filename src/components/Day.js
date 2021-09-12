import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Day = ({ day }) => {
  const [isSelected, setIsSelected] = useState("false");

  const handleSelectDay = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <TouchableOpacity
      style={isSelected ? styles.default : styles.selected}
      onPress={handleSelectDay}
    >
      <Text style={isSelected ? styles.defaultText : styles.selectedText}>
        {day}
      </Text>
    </TouchableOpacity>
  );
};

export default Day;

const styles = StyleSheet.create({
  default: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 40,
    marginLeft: 7,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
  },
  defaultText: {
    color: "#000",
  },
  selected: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 40,
    marginLeft: 7,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  selectedText: {
    color: "#FFF",
  },
});
