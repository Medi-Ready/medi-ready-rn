import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";
import PrescriptionCard from "../components/PrescriptionCard";

const DashboardScreen = ({ navigation, prescriptions }) => {
  const isLoading = useSelector(state => state.prescription.isLoading);

  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(getPrescriptionList());
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
      >
        {
          prescriptions.length
            ? prescriptions.map(prescription => {
              return <PrescriptionCard key={prescription.prescription_id} prescriptionInfo={prescription} />;
            })
            : <Text>No List yet...</Text>
        }
      </ScrollView>

      <TouchableOpacity
        style={styles.createIcon}
        onPress={() => navigation.navigate("Create")}
      >
        <MaterialCommunityIcons name="alarm-plus" size={50} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  createIcon: {
    zIndex: 100,
    position: "absolute",
    bottom: 20,
    right: 5,
    alignSelf: "flex-end",
  },
});

export default DashboardScreen;
