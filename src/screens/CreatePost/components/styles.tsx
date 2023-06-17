import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    minHeight: 76,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  touchableContainer: {
    width: 44,
    height: 44,
    backgroundColor: colors.backgroundColor,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: colors.border,
    borderRadius: 4,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    color: colors.gray,
  },
  imagesList: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  flatList: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: colors.border,
    borderRadius: 4,
    width: 44,
    height: 44,
    marginHorizontal: 2,
    marginVertical: 2,
  },

  loaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 44,
    height: 44,
    marginHorizontal: 2,
    marginVertical: 2,
  },
});
export default styles;
