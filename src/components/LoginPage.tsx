import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { HomePageProps } from "../routes";

import { styles } from "../styles/login-page.styles";
import { theme } from "../theme";

import { logoImage } from "../assets";
import { logoPequenoGOVImage } from "../assets";
import { loginPageImage } from "../assets";
import { logoGOVImage } from "../assets";

export function LoginPage({ navigation }: HomePageProps) {
  return (
    <View style={styles.container}>
      <>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ArrowLeft size={32} color={theme.colors.surface_gov}/>
        </TouchableOpacity> */}
        <View>
          <Image source={logoImage} />
          <Image source={logoPequenoGOVImage} />
        </View>
      </>
      <Image source={loginPageImage} style={styles.main_image} />
      <>
        <Text style={styles.description}>Entre através do</Text>
        <Image source={logoGOVImage} />
        <TouchableOpacity style={styles.gov_button} onPress={() => navigation.navigate("DoctorHome")}>
          <Text style={styles.gov_button_text}>Login com gov.br</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.back_button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.back_button_text}>Voltar</Text>
        </TouchableOpacity>
      </>
    </View>
  );
}
