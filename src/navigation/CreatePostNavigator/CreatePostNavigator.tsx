import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Touchable from '../../components/Touchable/Touchable';
import CreatePostScreen from '../../screens/CreatePost/CreatePostScreen';
import {CreatePostStackNavigatorParamList} from './types';
import screens from '../screens';
import colors from '../../styles/colors';

const Stack = createNativeStackNavigator<CreatePostStackNavigatorParamList>();

function CreatePostNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation, route}) => ({
          headerTitleAlign: 'center',
          headerShown: true,
          headerTitle: props => <Text style={{fontSize: 16}}>New Post</Text>,
          headerLeft: () => {
            return (
              <Touchable onPress={() => navigation.goBack()}>
                <Ionicons name="close" size={30} color={colors.primary} />
              </Touchable>
            );
          },
          headerRight: props => (
            <Touchable onPress={() => route.params.onSubmit()}>
              <Text style={style.postLabel}>Post</Text>
            </Touchable>
          ),
        })}
        name={screens.CreatePost}
        component={CreatePostScreen}
      />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  postLabel: {
    fontSize: 18,
    color: colors.primary,
  },
});

export default CreatePostNavigator;
