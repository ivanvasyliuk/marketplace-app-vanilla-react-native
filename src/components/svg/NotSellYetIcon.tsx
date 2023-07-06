import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import colors from '../../styles/colors';

const NotSellYetIcon: FC = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 180,
        right: 0,
        left: 0,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}>
      <Svg
        width="128"
        height="122"
        viewBox="0 0 128 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M113.768 43.1533L127.267 29.6543C127.824 29.0986 128.086 28.3125 127.975 27.5342C127.864 26.7558 127.392 26.0742 126.703 25.6953L110.475 16.7842C109.265 16.1201 107.745 16.5625 107.08 17.7724C106.416 18.9834 106.857 20.5029 108.068 21.167L121.377 28.4746L109.792 40.0586L68.1249 17.1787L79.7089 5.59471L91.4189 12.0254C92.6288 12.6894 94.1493 12.248 94.8134 11.0371C95.4784 9.82713 95.036 8.30662 93.8251 7.64256L80.4706 0.308574C79.496 -0.226582 78.2851 -0.0537308 77.4999 0.732402L63.9999 14.2324L50.4999 0.732402C49.7138 -0.0537308 48.5028 -0.225606 47.5292 0.308574L1.29679 25.6953C0.607337 26.0742 0.135657 26.7549 0.0253055 27.5342C-0.0860225 28.3125 0.175696 29.0986 0.732337 29.6543L14.2314 43.1533L0.732337 56.6513C0.175696 57.208 -0.0860225 57.9931 0.0253055 58.7724C0.135657 59.5508 0.607337 60.2324 1.29679 60.6103L15.2675 68.2822V93.9248C15.2675 94.8379 15.7646 95.6777 16.5644 96.1172L62.7968 121.503C63.1718 121.709 63.5859 121.811 63.9999 121.811C64.414 121.811 64.828 121.709 65.203 121.503L111.435 96.1172C112.235 95.6777 112.732 94.8379 112.732 93.9248V68.2822L126.703 60.6113C127.392 60.2324 127.864 59.5508 127.975 58.7724C128.086 57.9941 127.824 57.208 127.267 56.6523L113.768 43.1533ZM63.9999 65.6865L22.9618 43.1523L63.9999 20.6172L105.038 43.1523L63.9999 65.6865ZM48.2919 5.59471L59.8749 17.1787L18.2079 40.0586L6.62394 28.4746L48.2919 5.59471ZM18.2099 46.247L59.8769 69.1269L48.2919 80.7119L6.62394 57.832L18.2099 46.247ZM107.732 92.4463L66.4999 115.087V89.5312C66.4999 88.1504 65.3808 87.0312 63.9999 87.0312C62.6191 87.0312 61.4999 88.1504 61.4999 89.5312V115.087L20.2675 92.4463V71.0283L47.5292 85.998C47.9071 86.205 48.3212 86.3066 48.7314 86.3066C49.3788 86.3066 50.0194 86.0547 50.4999 85.5742L63.9999 72.0742L77.4999 85.5742C77.9804 86.0556 78.621 86.3066 79.2685 86.3066C79.6786 86.3066 80.0927 86.205 80.4706 85.998L107.732 71.0283V92.4463ZM79.7089 80.7119L68.1239 69.1259L109.791 46.247L121.377 57.831L79.7089 80.7119Z"
          fill="#A0A4B1"
        />
      </Svg>
      <Text
        style={{
          color: colors.border,
          fontWeight: '400',
          lineHeight: 24,
          alignSelf: 'center',
          fontSize: 16,
        }}>
        User doesn’t sell anything yet
      </Text>
    </View>
  );
};
export default NotSellYetIcon;
