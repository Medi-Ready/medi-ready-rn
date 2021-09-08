import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { getPrescriptionList } from "../redux/features/prescriptionSlice";

import DashboardScreen from "../screens/DashboardScreen";
import LoadingScreen from "../screens/LoadingScreen";

const TopTab = createMaterialTopTabNavigator();

const DashboardTopTabNavigator = () => {
  const isLoading = useSelector((state) => state.prescription.isLoading);
  const prescriptionList = useSelector((state) => state.prescription.prescriptionList);

  const customPrescriptionList = prescriptionList.filter((prescription) => {
    return prescription.is_custom === true;
  });
  const pharmacyPrescriptionList = prescriptionList.filter((prescription) => {
    return prescription.is_custom === false;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrescriptionList());
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <TopTab.Navigator initialRouteName="All">
      <TopTab.Screen name="All">
        {props => <DashboardScreen {...props} prescriptions={prescriptionList} />}
      </TopTab.Screen>
      <TopTab.Screen name="CUSTOM">
        {props => <DashboardScreen {...props} prescriptions={customPrescriptionList} />}
      </TopTab.Screen>
      <TopTab.Screen name="PRESCRIPTION">
        {props => <DashboardScreen {...props} prescriptions={pharmacyPrescriptionList} />}
      </TopTab.Screen>
    </TopTab.Navigator>
  );
};

export default DashboardTopTabNavigator;
