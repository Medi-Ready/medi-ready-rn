import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreateIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.createIcon}
      onPress={() => navigation.navigate("Create")}
    >
      <MaterialCommunityIcons name="alarm-plus" size={50} color="#006FF3" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createIcon: {
    zIndex: 100,
    position: "absolute",
    bottom: 15,
    right: 10,
  },
});

export default CreateIcon;
