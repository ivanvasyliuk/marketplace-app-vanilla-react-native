import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {},
  inputRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  priceContainer: {
    height: 44,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.gray,
    justifyContent: "space-between",
  },
});
export default styles;
