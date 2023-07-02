import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sortSegmentContainer: {
    padding: 16,
  },

  segmentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    textTransform: 'uppercase',
  },
  searchContainer: {
    height: 76,
    padding: 16,
  },
  contentContainer: {backgroundColor: colors.white, flex: 1},
  submitButton: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {textTransform: 'uppercase', color: 'white'},
});
export default styles;
