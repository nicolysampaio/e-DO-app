import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from './src/theme';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

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
      <Text style={styles.text_primary_regular}>Regular primary size 20</Text>
      <Text style={styles.text_secondary_medium}>Medium secondary size 18</Text>
      <Text style={styles.text_on_brand_semi_bold}>Semi bold on brand size 16</Text>
      <Text style={styles.text_primary_black_border}>Black primary with border size 14</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_primary_regular:{
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    marginBottom: 12,
    fontSize: 20,
  },
  text_secondary_medium:{
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.medium,
    marginBottom: 12,
    fontSize: 18,
  },
  text_on_brand_semi_bold:{
    color: theme.colors.text_on_brand,
    fontFamily: theme.fonts.semi_bold,
    backgroundColor: theme.colors.brand,
    padding: 5,
    marginBottom: 12,
    fontSize: 16,
  },
  text_primary_black_border: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.black,
    padding: 5,
    borderWidth: 1,
    fontSize: 14,
    borderColor: theme.colors.border,
  }

});