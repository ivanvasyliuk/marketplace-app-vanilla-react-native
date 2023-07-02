import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.white,
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    backgroundColor: colors.white,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 8,
  },
  containerOnFocus: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: colors.backgroundColor,
    maxHeight: 200,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  icon: {
    alignSelf: 'flex-end',
    marginLeft: 10,
    color: colors.primary,
  },
  focusedIcon: {
    color: colors.primary,
  },
  ownerBarItem: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    height: 58,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  titlesContainer: {flex: 1, marginLeft: 8},
  productTitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },

  lastMessageLabel: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: colors.gray,
  },
});
export default styles;
