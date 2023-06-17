import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Touchable from "../../../components/Touchable/Touchable";
import UserImage from "../../../components/User/UserImage/UserImage";
import colors from "../../../styles/colors";
import s from "./styles";

const ChatLeftHeader = ({ chat }) => {
  const navigation = useNavigation();
  return (
    <View style={s.container}>
      <Touchable isOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          size={24}
          style={{ marginHorizontal: 20 }}
          color={colors.primary}
        />
      </Touchable>
      <UserImage image={chat.owner.avatar} size={36} />
      <Text style={s.ownerNameTitle}>{chat.owner.fullName}</Text>
    </View>
  );
};
export default ChatLeftHeader;
