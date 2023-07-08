import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 103,
  },

  loginBotton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 44,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 44,
  },
  loginButtonText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: colors.white,
  },
  grayText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'gray',
  },
});
export default styles;
