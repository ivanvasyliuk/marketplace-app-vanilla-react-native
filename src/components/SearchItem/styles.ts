import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
    paddingVertical: 8,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  iconLeft: {
    color: colors.border,
  },
});
export default styles;
