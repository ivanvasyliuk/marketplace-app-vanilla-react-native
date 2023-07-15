import {StyleSheet} from 'react-native';
import {CALL_BUTTON_HEIGHT, TAB_BAR_HEIGHT_SIZE} from '../../styles/dimensions';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {paddingBottom: TAB_BAR_HEIGHT_SIZE + CALL_BUTTON_HEIGHT},
  titleAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    flex: 1,
    backgroundColor: '#00000043',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  title: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  timeAndLocation: {
    flexDirection: 'row',
  },
  locationLabel: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '700',
    color: colors.gray,
    marginRight: 10,
  },
  price: {
    position: 'absolute',
    right: 16,
    top: 8,
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  descriptionContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  descrioption: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '400',
  },
  horizontalLine: {
    borderBottomColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    flex: 1,
    backgroundColor: '#00000043',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 5,
  },
  rigthButtonsInHeader: {
    flexDirection: 'row',
  },

  readMore: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.primary,
  },
});
export default styles;
