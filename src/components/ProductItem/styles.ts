import {StyleSheet} from 'react-native';
import {dimensions} from '../../styles';
import colors from '../../styles/colors';

const WIDTH = dimensions.width / 2 - 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: WIDTH,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 4,
  },
  image: {
    width: WIDTH,
    height: WIDTH,
  },
  saveButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  itemTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 12,
    marginTop: 8,
  },
  itemPrice: {
    fontWeight: '700',
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 12,
  },
  left: {marginRight: 4, marginLeft: 8},
  right: {
    marginLeft: 4,
    marginRight: 8,
  },
});
export default styles;
