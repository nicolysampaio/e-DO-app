import { EnvelopeSimple, List } from "phosphor-react-native";
import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import { theme } from "../../theme";
import { styles } from "../../styles/doctor-home-page.styles";

import { logoImage } from "../../assets";
import { novaDeclaracaoImage } from "../../assets";
import { declaracoesPendentesImage } from "../../assets";
import { minhasDeclaracoesImage } from "../../assets";
import { hospitaisImage } from "../../assets";

export function DoctorHomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <List color={theme.colors.brand} size={32} />
        <Image source={logoImage} />
        <EnvelopeSimple color={theme.colors.brand} size={32} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>Olá, Dr. João</Text>
        <Text style={styles.subtitle}>O que gostaria de fazer hoje?</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option} >
          <Image source={novaDeclaracaoImage} />
          <Text style={styles.option_title}>{`Criar nova
e-DO`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={declaracoesPendentesImage} />
          <Text style={styles.option_title}>{`Declarações 
pendentes`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={minhasDeclaracoesImage} />
          <Text style={styles.option_title}>{`Minhas
e-DO`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={hospitaisImage} />
          <Text style={styles.option_title}>{`Hospitais
cadastrados`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
