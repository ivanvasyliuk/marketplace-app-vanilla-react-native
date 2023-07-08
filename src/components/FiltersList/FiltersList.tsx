import React, {Dispatch, FC, SetStateAction} from 'react';
import {View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import FiltersListItem from '../FiltersListItem/FiltersListItem';
import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';

interface IFiltersListProps {
  list: (string | string[])[];
  filtersValues?: filtersValuesProps;
  setFiltersValues: Dispatch<SetStateAction<filtersValuesProps>>;
}

const FiltersList: FC<IFiltersListProps> = ({
  list,
  setFiltersValues,
  filtersValues,
}) => {
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
