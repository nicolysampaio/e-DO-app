import React from "react";
import { View, Text } from "react-native";

import { styles } from "../../styles/doctor-home-page.styles";

export function DoctorHomePage() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>DoctorHome</Text>
      </View>
    </>
  );
}
