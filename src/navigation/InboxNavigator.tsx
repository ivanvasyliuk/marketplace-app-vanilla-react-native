import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InboxScreen from '../screens/Inbox/InboxScreen';
// import PostNavigation from "./PostNavigation";
import screens from './screens';
import {InboxStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<InboxStackNavigatorParamList>();

function InboxNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name={screens.Inbox} component={InboxScreen} />
        {/* <Stack.Screen
          options={{headerShown: false}}
          name={screens.PostDetailsNavigator}
          component={PostNavigation}
        /> */}
      </Stack.Navigator>
    </>
  );
}

export default InboxNavigator;
