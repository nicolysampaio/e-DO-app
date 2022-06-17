import * as React from "react";
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './src/routes/Navigation';

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
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Navigation/>
    </>
  );
}
