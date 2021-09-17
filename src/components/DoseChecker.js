import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Pills from "./Pills";

const DoseChecker = () => {
  const dosePeriodList = ["아침", "점심", "저녁", "취침전"];

  return (
    <View style={styles.container}>
      {dosePeriodList.map((dosePeriod, index) => {
        return (
          <View key={`dose-period-${index}`} style={styles.dosePeriod}>
            <Text>{dosePeriod}</Text>

            <View style={styles.pillIcon}>
              <Pills
                dosePeriod={dosePeriod} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    marginTop: 25,
  },
  dosePeriod: {
    marginRight: 30,
    marginLeft: 30,
  },
  pillIcon: {
    marginTop: 15,
  },
});

export default DoseChecker;