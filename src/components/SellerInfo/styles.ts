import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: { flex: 1 },
  avatarContainer: { marginRight: 16 },
  onlineStatus: { color: colors.ligthgreen },
  seeAllPostText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: colors.blue,
  },
});
export default styles;
