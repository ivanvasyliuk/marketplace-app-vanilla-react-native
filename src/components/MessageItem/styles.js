import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {},
  messageContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 10,
  },
  receiverContainer: {
    backgroundColor: colors.white,
    left: 8,
    maxWidth: 250,
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  senderContainer: {
    backgroundColor: colors.primary,
    right: 8,
    maxWidth: 250,
    alignSelf: "flex-end",
    alignItems: "flex-end",
    color: colors.white,
  },
  time: {
    fontSize: 12,
    // color: colors.,
    marginLeft: 8,

    alignSelf: "flex-end",
  },
  senderText: {
    color: colors.white,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  receiverText: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  senderTime: {
    color: colors.white,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
  },
  receiverTime: {
    color: colors.border,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
  },
});
export default styles;
