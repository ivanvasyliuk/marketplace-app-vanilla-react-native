import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InboxScreen from '../../screens/Inbox/InboxScreen';
import PostNavigation from '../PostNavigator/PostNavigation';
import {InboxStackNavigatorParamList} from './types';
import screens from '../screens';

const Stack = createNativeStackNavigator<InboxStackNavigatorParamList>();

function InboxNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name={screens.Inbox} component={InboxScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name={screens.PostDetailsNavigator}
          component={PostNavigation}
        />
      </Stack.Navigator>
    </>
  );
}

export default InboxNavigator;
