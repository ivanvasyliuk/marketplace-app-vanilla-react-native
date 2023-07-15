import {StyleSheet} from 'react-native';
import {TAB_BAR_HEIGHT_SIZE} from '../../styles/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: TAB_BAR_HEIGHT_SIZE,
  },
  keyInpormationContaine: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  descriptionInput: {
    height: 136,
    marginTop: 24,
    justifyContent: 'flex-start',
    padding: 16,
  },
});
export default styles;
