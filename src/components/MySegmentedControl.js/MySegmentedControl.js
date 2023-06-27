import React from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import colors from '../../styles/colors';
import s from './styles';

const MySegmentedControl = ({values, index, setIndex}) => {
  return (
    <SegmentedControl
      style={s.borderForSegment}
      values={values}
      selectedIndex={index}
      tintColor={colors.primary}
      backgroundColor={colors.white}
      fontStyle={{
        fontSize: 16,
        color: colors.primary,
      }}
      activeFontStyle={{fontSize: 16, color: colors.white}}
      onChange={event => {
        setIndex(event.nativeEvent.selectedSegmentIndex);
      }}
    />
  );
};
export default MySegmentedControl;
