import { CaretLeft } from "phosphor-react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../../styles/new-declaration.styles";
import { theme } from "../../theme";
import { FormPageProps } from "../../routes";

export function NewDeclaration({ navigation }: FormPageProps) {
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("DoctorHome")}>
          <CaretLeft color={theme.colors.brand} />
        </TouchableOpacity>
        <Text style={styles.title}>Criar nova e-DO</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.body_title}>Termo de responsabilidade</Text>
        <Text style={styles.body_text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.{" "}
        </Text>
        <View style={styles.terms}>
          <BouncyCheckbox
            size={20}
            fillColor={theme.colors.brand}
            unfillColor="#FFFFFF"
            text="Concordo com os termos"
            iconStyle={{ borderColor: theme.colors.brand, borderRadius: 4 }}
            textStyle={{ color: "#000000", textDecorationLine: "none" }}
            isChecked={checkboxState}
            onPress={() => setCheckboxState(!checkboxState)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={checkboxState ? styles.button : styles.button_disabled}
        onPress={() => navigation.navigate("Form")}
        disabled={checkboxState ? false : true}
      >
        <Text style={styles.button_text}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}
