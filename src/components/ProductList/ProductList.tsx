import React, {FC} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {FlashList} from '@shopify/flash-list';
import ProductItem from '../ProductItem/ProductItem';
import s from './styles';

interface IProductListProps {
  list: any[];
  // onScroll?: Function;
  ListEmptyComponent?: FC;
  ListHeaderComponent?: FC;
}

const ProductList: FC<IProductListProps> = ({
  list,
  // onScroll,
  ListEmptyComponent,
  ListHeaderComponent,
}) => {
  return (
    <View style={s.container}>
      <FlashList
        data={list}
        renderItem={({item, index}) => (
          <ProductItem index={index} product={item} />
        )}
        numColumns={2}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={s.listContainer}
        estimatedItemSize={200}
        // onScroll={onScroll}
        onEndReachedThreshold={0.3}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};
export default observer(ProductList);
