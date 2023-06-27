import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import screens from "../../../navigation/screens";
import Touchable from "../../Touchable/Touchable";
import s from "./styles";

const AuthFooter = ({ navigation, onSubmit, buttonLabel }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[s.container, { paddingBottom: bottom }]}>
      <View style={s.labelContainer}>
        <Text style={s.doYouHaveAcc}>
          {buttonLabel.length == 5 ? "Don’t have" : "Have"} an account?
        </Text>
        <Text
          style={s.navigateLabel}
          onPress={() =>
            navigation.navigate(
              buttonLabel.length == 5 ? screens.Register : screens.Login
            )
          }
        >
          {buttonLabel.length == 5 ? "  Register" : "  Login"}
        </Text>
      </View>
      <View style={s.touchableContainer}>
        <Touchable style={s.touchable} onPress={onSubmit}>
          <Text style={s.buttonLabel}>{buttonLabel}</Text>
        </Touchable>
      </View>
    </View>
  );
};

export default AuthFooter;
