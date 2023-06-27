import React from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import s from './styles';
import colors from '../../styles/colors';

const MySegmentedControlField = ({
  values,
  index,
  setIndex,
  value,
  filtersValues,
  setFiltersValues,
}) => {
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
        setFiltersValues({
          ...filtersValues,
          [value]: values[event.nativeEvent.selectedSegmentIndex],
        });
      }}
    />
  );
};
export default MySegmentedControlField;
