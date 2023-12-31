import React, {FC} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent, View} from 'react-native';
import {observer} from 'mobx-react';
import {FlashList} from '@shopify/flash-list';
import ProductItem from '../ProductItem/ProductItem';
import {IProductModel} from '../../stores/Products/ProductModel';
import s from './styles';

interface IProductListProps {
  list: IProductModel[];
  isRefreshing?: boolean;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
  onRefresh?: (() => void) | undefined;
  ListEmptyComponent?: FC;
  ListHeaderComponent?: FC;
}

const ProductList: FC<IProductListProps> = ({
  list,
  onScroll,
  ListEmptyComponent,
  ListHeaderComponent,
  onRefresh,
  isRefreshing,
}) => {
  return (
    <View style={s.container}>
      <FlashList
        data={list}
        renderItem={({item, index}) => (
          <ProductItem index={index} product={item} />
        )}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={s.listContainer}
        estimatedItemSize={200}
        onScroll={onScroll}
        onEndReachedThreshold={0.3}
        ListHeaderComponent={ListHeaderComponent}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};
export default observer(ProductList);
