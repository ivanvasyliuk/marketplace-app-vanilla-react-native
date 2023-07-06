import React, {FC} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import {FlashList} from '@shopify/flash-list';
import ProductItem from '../ProductItem/ProductItem';
import s from './styles';
import {IProductModule} from '../../stores/Products/ProductModel';

interface IProductListProps {
  list: IProductModule[];
  isRefreshing: boolean;
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
