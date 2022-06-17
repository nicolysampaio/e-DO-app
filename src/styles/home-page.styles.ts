import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.brand,
    fontFamily: theme.fonts.regular,
    fontSize: 70,
    marginBottom: 12,
  },
  title_black: {
    fontFamily: theme.fonts.black,
  },
  subtitle: {
    color: theme.colors.brand,
    fontFamily: theme.fonts.semi_bold,
    fontSize: 20,
    marginBottom: 12,
  },
  description: {
    paddingHorizontal: 40,
    marginBottom: 80,
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.text_primary,
  },
  description_medium: {
    fontFamily: theme.fonts.medium,
  },
  main_button: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    width: "85%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  main_button_text: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand,
  },
  secondary_button: {
    backgroundColor: theme.colors.surface_primary,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.border,
    width: "85%",
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  secondary_button_text: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_secondary,
  },
});
