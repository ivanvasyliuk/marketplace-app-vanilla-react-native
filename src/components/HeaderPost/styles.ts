import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 72,
    flex: 1,
    backgroundColor: "#00000043",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  rigthButtonsInHeader: {
    flexDirection: "row",
  },
  iconContainer: {
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
});
export default styles;
