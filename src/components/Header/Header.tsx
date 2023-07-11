import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {dimensions} from '../../styles';
import s from './styles';

interface IHeaderProps {
  children: ReactNode;
}

const Header: FC<IHeaderProps> = ({children}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        s.headerContainer,
        {paddingTop: top, height: top + dimensions.headerHeight},
      ]}>
      {children}
    </View>
  );
};
export default Header;
