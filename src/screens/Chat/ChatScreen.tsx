import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import {FlashList} from '@shopify/flash-list';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import UserImage from '../../components/UserImage/UserImage';
import MessageItem from '../../components/MessageItem/MessageItem';
import Touchable from '../../components/Touchable/Touchable';
import {
  AppStackNavigatorParamList,
  CompositeNavigationWithAppNavigatorType,
} from '../../navigation/AppNavigator/types';
import {BrowseStackNavigatorParamList} from '../../navigation/BrowseNavigator/types';
import screens from '../../navigation/screens';
import s from './styles';

const ChatScreen = () => {
  const [text, setText] = useState<string>('');
  const navigation =
    useNavigation<
      CompositeNavigationWithAppNavigatorType<
        StackNavigationProp<
          BrowseStackNavigatorParamList,
          'PostDetailsNavigator'
        >
      >
    >();
  const route = useRoute<RouteProp<AppStackNavigatorParamList, 'Chat'>>();

  const chat = route.params.chat;

  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    if (chat) {
      chat.messages.fetch.run();
    }
  }, [chat]);

  function navigateToPost() {
    navigation.navigate(screens.PostDetailsNavigator, {
      screen: screens.PostDetails,
      params: {product: chat.product},
    });
  }

  function sendMessage() {
    chat.sendMessage.run(text);
    setText('');
  }

  return (
    <View style={s.container}>
      <Touchable isOpacity onPress={navigateToPost}>
        <View style={s.ownerBarItem}>
          <UserImage size={32} image={chat.product.photos?.[0]} />
          <View style={s.titlesContainer}>
            <Text style={s.productTitle}>{chat.product.title}</Text>
            <Text numberOfLines={1} style={s.lastMessageLabel}>
              {chat.message.text}
            </Text>
          </View>
          <AntDesign name="right" size={24} style={s.iconRight} color="gray" />
        </View>
      </Touchable>
      <View style={s.messagesContainer}>
        <FlashList
          data={chat.messages.messagesArray.asArray}
          renderItem={({item}) => <MessageItem message={item} />}
          keyExtractor={item => item.id}
          role="dialog"
          inverted={true}
        />
      </View>
      <View style={[s.footer, bottom > 0 && {paddingBottom: bottom}]}>
        <View style={[s.inputContainer]}>
          <TextInput
            maxLength={400}
            placeholder="Message..."
            onChangeText={setText}
            style={[s.input]}
            value={text}
            multiline
          />
        </View>
        <Touchable isOpacity onPress={sendMessage}>
          <Entypo name="chevron-with-circle-right" size={40} style={s.icon} />
        </Touchable>
      </View>
    </View>
  );
};
export default observer(ChatScreen);
