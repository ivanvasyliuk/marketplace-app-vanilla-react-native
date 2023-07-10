import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {format, isToday, isYesterday} from 'date-fns';
import {IChatModel} from '../../stores/Chats/ChatModel';
import UserImage from '../UserImage/UserImage';
import Touchable from '../Touchable/Touchable';
import screens from '../../navigation/screens';
import s from './styles';

interface IInboxChatItemProps {
  chat: IChatModel;
}

const InboxChatItem: FC<IInboxChatItemProps> = ({chat}) => {
  const navigation = useNavigation();

  let date = new Date(chat.updatedAt);

  const renderTime = isToday(date)
    ? format(date, 'HH:mm')
    : isYesterday(date)
    ? `Yesterday, ${format(date, 'HH:mm')}`
    : format(date, 'MMM dd');

  function onPress() {
    navigation.navigate(screens.Chat, {
      chat: chat,
    });
  }

  return (
    <Touchable style={s.container} onPress={onPress}>
      <View style={s.imageContainer}>
        <UserImage size={56} image={chat.owner.avatar} />
      </View>
      <View style={s.titlesContainer}>
        <Text style={s.productTitle}>{chat.product.title}</Text>
        <Text style={s.ownerTitle}>{chat.owner.fullName}</Text>
        <Text style={s.lastMessageLabel} numberOfLines={1}>
          {chat.message.text}
        </Text>
      </View>
      <View style={{}}>
        <Text style={s.time}>{`${renderTime}`}</Text>
        {!chat.message.read && <View style={s.readIndicator}></View>}
      </View>
    </Touchable>
  );
};
export default observer(InboxChatItem);
