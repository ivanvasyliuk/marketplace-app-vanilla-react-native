import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostScreen from "../screens/Post/PostScreen";
import ProfileScreenAnimated from "../screens/Profile/ProfileScreenAnimated";
import screens from "./screens";

const Stack = createNativeStackNavigator();

function PostNavigation() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={screens.Profile}
          component={ProfileScreenAnimated}
        />
        <Stack.Screen name={screens.PostDetails} component={PostScreen} />
      </Stack.Navigator>
    </>
  );
}

export default PostNavigation;
