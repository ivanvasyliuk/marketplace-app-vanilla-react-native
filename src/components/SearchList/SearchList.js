import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import SearchItem from "../SearchItem/SearchItem";
import s from "./styles";

const ListEmptyComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>Not Found</Text>
    </View>
  );
};

const SearchList = ({ list }) => {
  return (
    <SafeAreaView style={s.container}>
      <FlashList
        data={list}
        contentContainerStyle={s.searchContainer}
        renderItem={({ item }) => <SearchItem product={item} />}
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
