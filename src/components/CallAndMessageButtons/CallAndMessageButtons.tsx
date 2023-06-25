import React from 'react';
import {Text, View} from 'react-native';
import CallIcon from '../svg/CallIcon';
import MessageIcon from '../svg/MessageIcon';
import Touchable from '../Touchable/Touchable';
import s from './styles';

interface ICallAndMessageButtonsProps {
  product: any;
  openCall: any;
}

const CALL_BUTTON_HEIGHT_SIZE: number = 60;

const CallAndMessageButtons: FC<ICallAndMessageButtonsProps> = ({
  product,
  openCall,
}) => {
  return (
    <View style={s.callAndMessageContainer}>
      <Touchable
        style={[s.callButtonContainer, {height: CALL_BUTTON_HEIGHT_SIZE}]}
        onPress={() => openCall(product.owner.phone)}>
        <CallIcon />
        <Text style={s.buttonLabel}>Call</Text>
      </Touchable>
      <Touchable
        style={[s.messageButtonContainer, {height: CALL_BUTTON_HEIGHT_SIZE}]}>
        <MessageIcon />
        <Text style={s.buttonLabel}>Message</Text>
      </Touchable>
    </View>
  );
};
export default CallAndMessageButtons;
