import React from "react";
import { Text, View } from "react-native";
import { useStore } from "../../../stores/createStore";
import s from "./styles";

const MessageItem = ({ message }) => {
  const store = useStore();

  const isViewerMessage = message.ownerId == store.viewer.userModel.id;
  return (
    <View style={s.container}>
      <View
        style={[
          s.messageContainer,
          isViewerMessage ? s.senderContainer : s.receiverContainer,
          message.text.length <= 26 && { flexDirection: "row" },
        ]}
      >
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
