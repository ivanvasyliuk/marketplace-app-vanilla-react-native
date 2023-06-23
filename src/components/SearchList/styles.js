import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.backgroundColor,
  },
  searchContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth * 4,
    borderTopWidth: StyleSheet.hairlineWidth * 4,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  horizontalLine: {
    backgroundColor: colors.border,
    height: 1,
  },
});
export default styles;
