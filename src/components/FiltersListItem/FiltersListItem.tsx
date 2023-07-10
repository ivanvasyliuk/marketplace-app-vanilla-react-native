import React, {Dispatch, FC, SetStateAction} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';
import Touchable from '../Touchable/Touchable';
import s from './styles';

interface IFiltersListItemProps {
  filter: string | string[];
  setFiltersValues: Dispatch<SetStateAction<filtersValuesProps>>;
  filtersValues: filtersValuesProps;
}

const FiltersListItem: FC<IFiltersListItemProps> = ({
  filter,
  setFiltersValues,
  filtersValues,
}) => {
  const filterValue = Array.isArray(filter)
    ? `${filter[0]} - ${filter[1]}`
    : filter;

  const filterKey = Object.keys(filtersValues).find(
    key => filtersValues[key] === filter,
  );

  return (
    <View style={s.container}>
      <Text>{filterValue}</Text>
      <Touchable
        style={s.touchable}
        isOpacity
        onPress={() => setFiltersValues({...filtersValues, [filterKey]: ''})}>
        <AntDesign name="close" color="gray" size={16} />
      </Touchable>
    </View>
  );
};
export default FiltersListItem;
