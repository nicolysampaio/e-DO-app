import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../../../styles/form.styles";
import { FormPageProps } from "../../../routes";
import { ArrowRight, CaretDown, CaretLeft, CaretUp, Check } from "phosphor-react-native";
import { theme } from "../../../theme";

export function Continue({ navigation }: FormPageProps) {
  const [optionOne, setOptionOne] = React.useState(false);
  const [optionTwo, setOptionTwo] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("DoctorHome")}>
          <CaretLeft color={theme.colors.brand} />
        </TouchableOpacity>
        <Text style={styles.title}>Criar nova e-DO</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.question_body}>
          <Text style={styles.step_title}>I - Identificação</Text>
          <View style={styles.question}>
            <Text style={styles.question_number}>N{'  '}</Text>
            <ArrowRight size={14} color={theme.colors.text_primary}/>
            <Text style={styles.question_title}>{'  '}Pergunta</Text>
          </View>
          <View style={styles.question_answer}>
            <TouchableOpacity onPress={() => {
              setOptionOne(!optionOne) 
              setOptionTwo(false)}
              } 
              style={
                optionOne ? 
                styles.option_selected : 
                styles.option}>
              <Text
              style={
                optionOne ? 
                styles.option_selected_text : 
                styles.option_text}>Opção 1</Text>
            </TouchableOpacity>
            <TouchableOpacity   onPress={() => {
              setOptionOne(false) 
              setOptionTwo(!optionTwo)}
              } 
              style={
                optionTwo ? 
                styles.option_selected : 
                styles.option}>
              <Text
              style={
                optionTwo ? 
                styles.option_selected_text : 
                styles.option_text}>Opção 2</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Form")}>
            <CaretUp weight='bold' size={32}  color={theme.colors.text_on_brand}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Continue")}>
            <CaretDown weight='bold' size={32}  color={theme.colors.text_on_brand}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
