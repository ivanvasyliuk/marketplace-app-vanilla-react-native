import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {IMessageModule} from '../../stores/Chats/MessageModel';
import {useStore} from '../../stores/createStore';
import s from './styles';

interface IMessageItemProps {
  message: IMessageModule;
}

const MessageItem: FC<IMessageItemProps> = ({message}) => {
  const store = useStore();

  const isViewerMessage = message.ownerId == store.viewer.userModel?.id;
  return (
    <View style={s.container}>
      <View
        style={[
          s.messageContainer,
          isViewerMessage ? s.senderContainer : s.receiverContainer,
          message.text.length <= 26 && {flexDirection: 'row'},
        ]}>
        <Text style={isViewerMessage ? s.senderText : s.receiverText}>
          {message.text}
        </Text>
        <Text style={[s.time, isViewerMessage ? s.senderTime : s.receiverTime]}>
          {message.createdAt}
        </Text>
      </View>
    </View>
  );
};
export default MessageItem;
