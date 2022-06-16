import React from "react";
import { View } from "react-native";

import { HomePage } from "./src/components/HomePage";

import { styles } from "./src/styles";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}
