import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";

const PrescriptionCard = ({ prescriptionInfo }) => {
  const { is_custom, created_at, pharmacist } = prescriptionInfo;
  const [prescriptionName, setPrescriptionName] = useState(pharmacist.pharmacy_name);
  const [alarmEnabled, setAlarmEnabled] = useState(false);

  const navigation = useNavigation();

  const toggleSwitch = () => {
    setAlarmEnabled(previousState => !previousState);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { prescriptionInfo, prescriptionName })}
    >
      <View>
        <Text style={styles.title}>{prescriptionName}</Text>
        <Text style={styles.date}>{created_at}</Text>
      </View>

      <Switch
        onValueChange={toggleSwitch}
        value={alarmEnabled}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
    marginBottom: 15,
    padding: 30,
    borderRadius: 12,
    backgroundColor: "#D6D6D6",
  },
  title: {
    fontSize: 30,
  },
  date: {
    marginTop: 20,
  },
});

export default PrescriptionCard;
