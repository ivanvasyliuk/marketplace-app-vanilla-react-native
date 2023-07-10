import React, {Dispatch, FC, SetStateAction} from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';
import colors from '../../styles/colors';
import s from './styles';

interface IMySegmentedControlFieldProps {
  values: string[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  value: string;
  filtersValues: filtersValuesProps;
  setFiltersValues: Dispatch<SetStateAction<filtersValuesProps>>;
}

const MySegmentedControlField: FC<IMySegmentedControlFieldProps> = ({
  values,
  index,
  setIndex,
  value,
  filtersValues,
  setFiltersValues,
}) => {
  console.log('MySegmentedControlField', value);
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
