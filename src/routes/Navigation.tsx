import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Clipboard,
  ClipboardText,
  HouseSimple,
  User,
} from "phosphor-react-native";

import { RootTabParamList, RootStackParamList } from ".";
import { theme } from "../theme";

import { HomePage } from "../components/HomePage";
import { LoginPage } from "../components/LoginPage";
import { DoctorHomePage } from "../components/DoctorHomePage";
import { MyEDO } from "../components/DoctorHomePage/MyEDO";
import { Pending } from "../components/DoctorHomePage/Pending";
import { Account } from "../components/DoctorHomePage/Account";

export function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="DoctorHome" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="DoctorHomePage"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.brand,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="DoctorHomePage"
        component={DoctorHomePage}
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <HouseSimple weight="fill" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="MyEDO"
        component={MyEDO}
        options={{
          title: "Minhas e-DO",
          tabBarIcon: ({color}) => <Clipboard color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Pending"
        component={Pending}
        options={{
          title: "Pendente",
          tabBarIcon: ({color}) => <ClipboardText color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          title: "Conta",
          tabBarIcon: ({color}) => <User weight="fill" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
