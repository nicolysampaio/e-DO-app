import React from "react";
import { Text, Image, TouchableOpacity, View, Button } from "react-native";

import { styles } from "../styles/home-page.styles";
import { PageProps } from '../routes';

import { logoGOVImage } from "../assets";
import { homePageImage } from "../assets";

export function HomePage({navigation}: PageProps) {
  return (
    <View style={styles.container}>
      <Image source={logoGOVImage} />
      <Image source={homePageImage} />

      <Text style={styles.title}>
        e-<Text style={styles.title_black}>DO</Text>
      </Text>
      <Text style={styles.subtitle}>Declaração de Óbito Eletrônica</Text>
      <Text style={styles.description}>
        <Text style={styles.description_medium}>Praticidade</Text> e{" "}
        <Text style={styles.description_medium}>respeito</Text> com os dados nos
        momentos mais difíceis
      </Text>

      <TouchableOpacity style={styles.main_button} onPress={() => navigation.navigate("Login") }>
        <Text style={styles.main_button_text}>Sou médico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondary_button}>
        <Text style={styles.secondary_button_text}>Parente do falecido</Text>
      </TouchableOpacity>
    </View>
  );
}
