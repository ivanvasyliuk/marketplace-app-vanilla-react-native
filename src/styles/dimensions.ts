import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

const isAndroid = Platform.OS === 'android';

const iosStatusBarHeight = isIphoneX() ? 34 : 20;

export const statusBarHeight = isAndroid
  ? StatusBar.currentHeight
  : iosStatusBarHeight;

export const headerHeight = isAndroid ? 56 : 44;

const {height, width} = Dimensions.get('window');

export {height, width};

export const TAB_BAR_HEIGHT_SIZE = 80;

// export const headerHeight = appBarHeight + statusBarHeight;
