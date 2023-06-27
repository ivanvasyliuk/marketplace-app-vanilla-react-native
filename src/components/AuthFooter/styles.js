import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: colors.gray,
    borderTopWidth: 0.5,
  },
  labelContainer: {
    flexDirection: "row",
  },
  touchableContainer: {
    overflow: "hidden",
    borderRadius: 20,
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 20,
    height: 40,
    backgroundColor: colors.primary,
  },
  navigateLabel: {
    color: colors.primary,
    textTransform: "uppercase",
  },
  buttonLabel: {
    textTransform: "uppercase",
    color: colors.white,
  },
  input: {},
  doYouHaveAcc: {
    color: colors.gray,
    fontSize: 14,
  },
});
export default styles;
