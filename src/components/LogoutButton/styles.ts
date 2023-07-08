import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    borderColor: colors.border,
    height: 44,
  },
  logOutTitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: colors.primary,
    marginLeft: 8,
    textTransform: 'uppercase',
  },
});
export default styles;
