import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { TAB_BAR_HEIGHT_SIZE } from "../../styles/dimensions";

const styles = StyleSheet.create({
  callAndMessageContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    left: 0,
    bottom: TAB_BAR_HEIGHT_SIZE,
  },
  callButtonContainer: {
    flex: 1,
    height: 60,
    backgroundColor: colors.ligthgreen,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  messageButtonContainer: {
    flex: 1,
    height: 60,
    backgroundColor: colors.blue,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  buttonLabel: {
    color: "white",
    fontStyle: "normal",
    marginLeft: 8,
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 24,
  },
});
export default styles;
