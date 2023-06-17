import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Touchable from "../../components/Touchable/Touchable";

const CancelButton = () => {
  const navigation = useNavigation();

  function onPress() {
    //Doing something
  }

  return (
    <Touchable onPress={onPress} isOpacity style={styles.touchable}>
      <Text style={styles.cancelButtonLabel}>Cancel</Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  touchable: {
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  cancelButtonLabel: {
    height: 18,
    fontSize: 16,
    color: "green",
  },
});

export default CancelButton;
