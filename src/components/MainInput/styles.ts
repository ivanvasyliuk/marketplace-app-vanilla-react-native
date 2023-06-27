import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {},
  containerInput: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    height: 44,
    borderRadius: 4,
  },
  descriptionContainer: {
    height: 136,
  },
  redErrorText: {
    color: "red",
  },
  grayErrorText: {
    color: colors.gray,
  },
  input: {},
  inEnd: {
    paddingTop: 4,
    height: 22,
  },
  errorInput: {
    borderColor: "red",
  },
  focusedInput: {
    borderColor: colors.primary,
  },
});

export default styles;
