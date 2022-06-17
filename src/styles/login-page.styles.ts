import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  // header: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginRight: 140,
  //   width: "50%",
  //   justifyContent: "space-between",
  // },
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
    marginTop: 62,
  },
  gov_button_text: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_gov,
  },
  back_button: {
    backgroundColor: theme.colors.surface_primary,
    borderRadius: 4,
    borderColor: theme.colors.surface_gov,
    borderWidth: 1,
    width: "85%",
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  back_button_text: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.surface_gov,
  },
  
});
