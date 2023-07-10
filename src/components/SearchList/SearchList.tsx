import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import SearchItem from '../SearchItem/SearchItem';
import s from './styles';
import {IProductModel} from '../../stores/Products/ProductModel';

const ListEmptyComponent = () => {
  return (
    <View style={s.listEmptyComponentContainer}>
      <Text style={{fontSize: 18}}>Not Found</Text>
    </View>
  );
};

interface ISearchListProps {
  list: IProductModel[];
}

const SearchList: FC<ISearchListProps> = ({list}) => {
  return (
    <SafeAreaView style={s.container}>
      <FlashList
        data={list}
        contentContainerStyle={s.searchContainer}
        renderItem={({item}) => <SearchItem product={item} />}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={() => <View style={s.horizontalLine} />}
        ListHeaderComponent={() => <View style={s.horizontalLine} />}
        ItemSeparatorComponent={() => (
          <View
            style={[
              s.horizontalLine,
              {
                marginHorizontal: 16,
              },
            ]}
          />
        )}
        estimatedItemSize={40}
      />
    </SafeAreaView>
  );
};
export default SearchList;
