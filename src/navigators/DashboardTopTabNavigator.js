import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DashboardAllScreen from "../screens/DashboardAllScreen";
import DashboardCustomScreen from "../screens/DashboardCustomScreen";
import DashboardPrescriptionScreen from "../screens/DashboardPrescriptionScreen";

const TopTab = createMaterialTopTabNavigator();

const DashboardTopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="All" component={DashboardAllScreen} />
      <TopTab.Screen name="CUSTOM" component={DashboardCustomScreen} />
      <TopTab.Screen name="PRESCRIPTION" component={DashboardPrescriptionScreen} />
    </TopTab.Navigator>
  );
};

export default DashboardTopTabNavigator;
