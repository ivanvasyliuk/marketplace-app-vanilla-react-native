import React, { useRef, useState } from "react";
import { View, TextInput, Text, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import s from "./styles";

const Input = ({ label, name, handleChange, errors, touched, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();
  const hasError = errors[name] && touched[name];
  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
      <View style={s.container}>
        <View
          style={[
            s.inputContainer,
            isFocused && s.focusedInput,
            hasError && s.errorInput,
          ]}
        >
          <Text style={[s.label, hasError && s.errorLabel]}>{label}</Text>
          <TextInput
            ref={inputRef}
            {...props}
            style={s.input}
            onChangeText={handleChange(name)}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
          {hasError && (
            <AntDesign
              style={s.warningIcon}
              name="exclamationcircle"
              size={16}
            />
          )}
        </View>
        <Text style={[hasError ? s.redErrorText : s.grayErrorText]}>
          {errors[name] && errors[name]}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Input;
