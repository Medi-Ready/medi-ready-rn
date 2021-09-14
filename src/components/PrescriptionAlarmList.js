import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import PrescriptionCard from "./PrescriptionAlarmCard";

const PrescriptionAlarmList = ({ isLoading, handleRefresh, prescriptionList }) => {
  const renderItem = ({ item }) => <PrescriptionCard prescriptionInfo={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.prescriptionList}
        data={prescriptionList}
        renderItem={renderItem}
        keyExtractor={prescription => `${prescription.prescription_id}dashboard`}
        refreshing={isLoading}
        onRefresh={handleRefresh}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  prescriptionList: {
    flex: 1,
  },
});

export default PrescriptionAlarmList;
