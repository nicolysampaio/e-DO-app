import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "../styles/login-page.styles";

import { logoImage } from '../assets';
import { logoPequenoGOVImage } from '../assets';
import { loginPageImage } from '../assets';
import { logoGOVImage } from '../assets';

export function LoginPage() {
  return (
    <>
      <>
        <Image source={logoImage}/>
        <Image source={logoPequenoGOVImage}/>
      </>
      <Image source={loginPageImage} style={styles.main_image}/>
      <>
        <Text style={styles.description}>Entre através do</Text>
        <Image source={logoGOVImage}/>
        <TouchableOpacity style={styles.gov_button}>
          <Text style={styles.gov_button_text}>Login com gov.br</Text>
        </TouchableOpacity>
      </>
    </>
  );
}
