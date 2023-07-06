import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {FlashList} from '@shopify/flash-list';
import {useStore} from '../../stores/createStore';
import EmptyInboxSvg from '../../components/svg/EmptyInboxSvg';
import GoToLoginButton from '../../components/GoToLoginButton/GoToLoginButton';
import InboxChatItem from '../../components/InboxChatItem/InboxChatItem';
import s from './styles';

const InboxScreen = () => {
  const store = useStore();
  const chats = store.chats;

  useEffect(() => {
    chats.fetch.run();
  }, []);

  return (
    <View style={s.container}>
      {store.viewer.userModel ? (
        <FlashList
          data={chats.list}
          renderItem={({item}) => <InboxChatItem chat={item} />}
          keyExtractor={item => item.id}
          refreshing={chats.fetch.isLoading}
          ListEmptyComponent={<EmptyInboxSvg />}
          ListFooterComponent={() => <View style={s.listHeaderComponent} />}
          ListHeaderComponent={() => <View style={s.listHeaderComponent} />}
          ItemSeparatorComponent={() => (
            <View style={s.separatorContainer}>
              <View style={s.separator} />
            </View>
          )}
        />
      ) : (
        <View style={s.centerContainer}>
          <Text style={s.grayText}>Login to check your Inbox</Text>
          <GoToLoginButton />
        </View>
      )}
    </View>
  );
};

export default observer(InboxScreen);
