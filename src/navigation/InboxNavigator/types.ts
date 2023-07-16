import {StackNavigationProp} from '@react-navigation/stack';
import screens from '../screens';

export type InboxStackNavigatorParamList = {
  [screens.Inbox]: undefined;
  [screens.PostDetailsNavigator]: undefined;
};

export type InboxNavigatorNavigationPropType<
  TScreenName extends keyof InboxStackNavigatorParamList,
> = StackNavigationProp<InboxStackNavigatorParamList, TScreenName>;
