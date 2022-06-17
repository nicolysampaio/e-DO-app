import { StyleSheet } from "react-native";
import { theme } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 50,
  },
  text: {
    width: "90%",
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.medium,
    color: "#455A64",
    marginTop: 30,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    marginBottom: 20,
  },
  options: {
    width: "90%",
    height: "75%",
    justifyContent: "space-around",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "#000000",
    shadowOpacity: 0.25,
  },
  option: {
    width: "100%",
    height: 118,
    backgroundColor: theme.colors.background_secondary,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "#000000",
    shadowOpacity: 0.25,
  },
  option_title: {
    width: "60%",
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.black,
    fontSize: 24,
    alignSelf: "center",
    textAlign: "right",
    paddingRight: 26,
  },
});
