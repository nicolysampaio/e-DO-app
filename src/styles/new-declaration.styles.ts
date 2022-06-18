import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "space-around",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    justifyContent: "space-between",
    marginTop: 16,
  },
  title: {
    fontFamily: theme.fonts.black,
    color: theme.colors.text_primary,
    fontSize: 16
  },
  body: {
    height: "70%",
    justifyContent: "space-between",
  },
  body_title: {
    color: theme.colors.text_secondary,
    fontWeight: "600",
    fontSize: 16,
  },
  body_text: {
    fontSize: 14,
    fontWeight: "300",
    color: theme.colors.text_primary,
  },
  terms: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  button_disabled: {
    backgroundColor: theme.colors.surface_primary,
    borderRadius: 4,
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  button_text: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand,},
});
