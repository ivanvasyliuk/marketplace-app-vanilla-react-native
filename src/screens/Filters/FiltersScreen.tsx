import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Touchable from '../../components/Touchable/Touchable';
import SearchInputField from '../../components/SearchInputField/SearchInputField';
import PriceRangeInput from '../../components/PriceRangeInput/PriceRangeInput';
import MySegmentedControlField from '../../components/MySegmentedControlField/MySegmentedControlField';
import s from './styles';

const FiltersScreen = () => {
  const [filtersValues, setFiltersValues] = useState({
    price: '',
    search: '',
    sortBy: '',
  });
  const [sortIndex, setSortIndex] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();

  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    setFiltersValues({...filtersValues, ...route.params.filtersValues});
    if (filtersValues.sortBy) {
      setSortIndex(
        ['Lowest', 'Highest', 'Newest'].indexOf(filtersValues.sortBy),
      );
    }
  }, []);

  function onSubmit() {
    route.params.filtersSubmit(filtersValues);

    navigation.goBack();
  }

  return (
    <View style={s.container}>
      <View style={s.contentContainer}>
        <View style={s.searchContainer}>
          <SearchInputField
            value={filtersValues.search}
            filtersValues={filtersValues}
            setFiltersValues={setFiltersValues}
            placeholder="Search"
          />
        </View>
        <View style={s.segmentContainer}>
          <PriceRangeInput
            filtersValues={filtersValues}
            priceRange={filtersValues.price}
            setFiltersValues={setFiltersValues}
          />
        </View>
        <View style={s.sortSegmentContainer}>
          <Text style={s.title}>Sort by</Text>
          <MySegmentedControlField
            values={['Lowest', 'Highest', 'Newest']}
            index={sortIndex}
            setIndex={setSortIndex}
            value={'sortBy'}
            filtersValues={filtersValues}
            setFiltersValues={setFiltersValues}
          />
        </View>
      </View>
      <Touchable onPress={onSubmit}>
        <View style={[s.submitButton, {marginBottom: bottom}]}>
          <Text style={s.submitButtonText}>Show results</Text>
        </View>
      </Touchable>
    </View>
  );
};

export default observer(FiltersScreen);
