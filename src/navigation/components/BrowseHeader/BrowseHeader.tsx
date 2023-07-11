import React from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import SearchInput from '../../../components/SearchInput/SearchInput';
import FiltersButton from '../../../components/svg/FiltersButton';
import Touchable from '../../../components/Touchable/Touchable';
import CancelButton from '../CancelButton';
import {BrowseStackNavigatorParamList} from '../../BrowseNavigator/types';
import {CompositeNavigationWithAppNavigatorType} from '../../AppNavigator/types';
import screens from '../../screens';

const BrowseHeader = () => {
  const navigation =
    useNavigation<
      CompositeNavigationWithAppNavigatorType<
        NavigationProp<BrowseStackNavigatorParamList>
      >
    >();
  const route = useRoute<RouteProp<BrowseStackNavigatorParamList, 'Browse'>>();

  return (
    <Header>
      <SearchInput placeholder="Search" />
      {!!route.params?.search ? (
        <CancelButton />
      ) : (
        <Touchable
          isOpacity
          style={{padding: 20}}
          onPress={() =>
            navigation.navigate(screens.FiltersModal, {
              screen: screens.FiltersScreen,
              params: {
                filtersSubmit: route.params.filtersSubmit,
                filtersValues: route.params.filtersValues,
              },
            })
          }>
          <FiltersButton />
        </Touchable>
      )}
    </Header>
  );
};

export default BrowseHeader;
