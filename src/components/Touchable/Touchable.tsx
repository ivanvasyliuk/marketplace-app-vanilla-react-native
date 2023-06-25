import React, {CSSProperties, FC} from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  View,
} from 'react-native';

const isAndroid = Platform.OS === 'android';

interface ITouchableProps extends TouchableNativeFeedbackProps {
  isOpacity?: boolean;
}

const Touchable: FC<ITouchableProps> = props =>
  isAndroid && !props.isOpacity ? (
    <TouchableNativeFeedback {...props}>
      <View style={props.style}>{props.children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
  );

export default Touchable;
