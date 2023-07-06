import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grayText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 8,
  },
  listHeaderComponent: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  separatorContainer: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    paddingLeft: 72,
    backgroundColor: colors.white,
  },
  separator: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
});
export default styles;
