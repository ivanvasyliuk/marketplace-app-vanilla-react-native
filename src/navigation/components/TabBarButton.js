import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddPostButton from "../../components/svg/AddPostButton";
import colors from "../../styles/colors";

const TabBarButton = ({}) => {
  return (
    <View style={styles.container}>
      <AddPostButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: 999,
    bottom: 10,
    backgroundColor: colors.primary,
  },
});
export default TabBarButton;
