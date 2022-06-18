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
    marginTop: 26,
    marginBottom: 16,
  },
  body: {
    height: "85%",
  },
  question_body: {
    height: "90%",
  },
  title: {
    fontFamily: theme.fonts.black,
    color: theme.colors.text_primary,
    fontSize: 16,
  },
  step_title: {
    fontFamily: theme.fonts.semi_bold,
    color: theme.colors.text_primary,
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 50,
  },
  question: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 50,
  },
  question_number: {
    fontFamily: theme.fonts.black,
    color: theme.colors.text_primary,
    fontSize: 17,
  },
  question_title: {
    fontFamily: theme.fonts.black,
    color: theme.colors.text_primary,
    fontSize: 17,
  },
  question_answer: {
    width: "100%",
    marginLeft: 30,
  },
  option: {
    borderWidth: 1,
    width: "80%",
    padding: 20,
    borderRadius: 4,
    borderColor: theme.colors.text_primary,
    marginBottom: 16,
  },
  option_text: {
    color: theme.colors.text_primary,
  },
  option_selected: {
    width: "80%",
    padding: 20,
    borderRadius: 4,
    backgroundColor: theme.colors.brand,
    marginBottom: 16,
  },
  option_selected_text: {
    color: theme.colors.text_on_brand,
  },
  buttons: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 4,
    backgroundColor: theme.colors.brand,
    padding: 10,
    marginLeft:10
  },
});
