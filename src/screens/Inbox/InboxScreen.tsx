import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {FlashList} from '@shopify/flash-list';
import {useStore} from '../../stores/createStore';
import EmptyInboxSvg from '../../components/svg/EmptyInboxSvg';
import GoToLoginButton from '../../components/GoToLoginButton/GoToLoginButton';
import InboxChatItem from '../../components/InboxChatItem/InboxChatItem';
import colors from '../../styles/colors';
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
          ListFooterComponent={() => (
            <View
              style={{
                borderBottomColor: colors.border,
                borderBottomWidth: 1,
              }}
            />
          )}
          ListHeaderComponent={() => (
            <View
              style={{
                borderBottomColor: colors.border,
                borderBottomWidth: 1,
              }}
            />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                paddingLeft: 72,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  borderBottomColor: colors.border,
                  borderBottomWidth: 1,

                  backgroundColor: 'white',
                }}
              />
            </View>
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 24,
              letterSpacing: 0,
              textAlign: 'center',
              color: 'gray',
              marginBottom: 8,
            }}>
            Login to check your Inbox
          </Text>
          <GoToLoginButton />
        </View>
      )}
    </View>
  );
};

export default observer(InboxScreen);
