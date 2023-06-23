import React from "react";
import { Text, View } from "react-native";
import CallIcon from "../svg/CallIcon";
import MessageIcon from "../svg/MessageIcon";
import Touchable from "../Touchable/Touchable";
import s from "./styles";

const CallAndMessageButtons = ({ product, openCall }) => {
  return (
    <View style={s.callAndMessageContainer}>
      <Touchable
        style={s.callButtonContainer}
        onPress={() => openCall(product.owner.phone)}
      >
        <CallIcon />
        <Text style={s.buttonLabel}>Call</Text>
      </Touchable>
      <Touchable style={s.messageButtonContainer}>
        <MessageIcon />
        <Text style={s.buttonLabel}>Message</Text>
      </Touchable>
    </View>
  );
};
export default CallAndMessageButtons;
