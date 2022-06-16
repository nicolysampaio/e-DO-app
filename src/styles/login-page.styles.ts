import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
  main_image: {
    marginTop: 78.5,
    marginBottom: 113.5,
  },
  description: {
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.text_primary,
    marginBottom: 12,
  },
  gov_button: {
    backgroundColor: theme.colors.surface_gov,
    borderRadius: 4,
    width: "85%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 42,
  },
  gov_button_text: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_gov,
  },
});
