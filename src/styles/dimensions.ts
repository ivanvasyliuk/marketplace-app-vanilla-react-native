import {Dimensions, Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

export const headerHeight = isAndroid ? 56 : 44;

const {height, width} = Dimensions.get('window');

export {height, width};

export const TAB_BAR_HEIGHT_SIZE = 80;
