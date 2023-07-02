import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchable from '../Touchable/Touchable';
import s from './styles';

const FiltersListItem = ({filter, setFiltersValues, filtersValues}) => {
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
