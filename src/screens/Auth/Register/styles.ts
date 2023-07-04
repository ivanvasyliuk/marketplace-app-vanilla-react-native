import {Platform, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    justifyContent: 'space-between',
    flex: 1,
  },
  formContainer: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      ios: {},
    }),
  },
});
export default styles;
