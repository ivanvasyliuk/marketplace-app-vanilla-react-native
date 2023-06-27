import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  inputContainer: {
    height: 44,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  errorInput: {
    borderColor: "red",
  },
  errorLabel: {
    color: "red",
  },
  redErrorText: {
    color: "red",
  },
  grayErrorText: {
    color: colors.gray,
  },
  focusedInput: {
    borderColor: colors.primary,
  },
  label: {
    position: "absolute",
    left: 16,
    top: -12,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 8,
    color: colors.primary,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  warningIcon: {
    color: "red",
    position: "absolute",
    right: 14,
  },
});
export default styles;
