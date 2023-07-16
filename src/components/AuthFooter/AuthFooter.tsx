import React, {FC} from 'react';
import {GestureResponderEvent, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Touchable from '../Touchable/Touchable';
import screens from '../../navigation/screens';
import s from './styles';

interface IAuthFooterProps {
  onSubmit: () => void;
  buttonLabel: string;
  onPress: (e: GestureResponderEvent) => void;
}

const AuthFooter: FC<IAuthFooterProps> = ({onSubmit, buttonLabel, onPress}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={[s.container, bottom > 0 && {paddingBottom: bottom}]}>
      <View style={s.labelContainer}>
        <Text style={s.doYouHaveAcc}>
          {route.name == screens.Login ? 'Don’t have' : 'Have'} an account?
        </Text>
        <Text style={s.navigateLabel} onPress={onPress}>
          {' '}
          {route.name == screens.Login ? screens.Register : screens.Login}
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
