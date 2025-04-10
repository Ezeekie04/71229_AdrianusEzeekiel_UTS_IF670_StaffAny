import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import OrganisationDetailScreen from "../screens/more/component/OrganisationDetailScreen";
import NotificationScreen from "../screens/notifications/NotificationScreen";
import ProfileScreen from "../screens/more/profile/ProfileScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="OrganisationDetail" component={OrganisationDetailScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
