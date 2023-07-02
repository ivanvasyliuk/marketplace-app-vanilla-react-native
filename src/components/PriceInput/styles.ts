import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderTopColor: colors.border,
    borderBottomColor: colors.border,
    minHeight: 76,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  horizontalLine: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 16,
  },
});
export default styles;
