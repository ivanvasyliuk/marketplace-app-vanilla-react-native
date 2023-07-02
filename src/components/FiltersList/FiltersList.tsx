import React, {FC} from 'react';
import {View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import FiltersListItem from '../FiltersListItem/FiltersListItem';

interface IFiltersListProps {
  list: any[];
}

const FiltersList: FC<IFiltersListProps> = ({list}) => {
  return (
    <View style={{height: 52, justifyContent: 'center'}}>
      <FlashList
        data={list}
        renderItem={({item}) => (
          <FiltersListItem
            setFiltersValues={setFiltersValues}
            filtersValues={filtersValues}
            filter={item}
          />
        )}
        horizontal
      />
    </View>
  );
};

export default FiltersList;
