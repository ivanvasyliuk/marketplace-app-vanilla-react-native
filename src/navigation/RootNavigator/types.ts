import {
  CompositeNavigationProp,
  NavigationProp,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackNavigatorParamList} from '../AppNavigator/types';
import {AuthStackNavigatorParamList} from '../AuthNavigator/types';
import screens from '../screens';

export type RootStackNavigatorParamList = {
  [screens.Auth]: NavigatorScreenParams<AuthStackNavigatorParamList>;
  [screens.MainApp]: NavigatorScreenParams<AppStackNavigatorParamList>;
};
export type CompositeNavigationWithRootNavigatorType<
  T extends NavigationProp<ParamListBase, string, any, any>,
> = CompositeNavigationProp<
  T,
  StackNavigationProp<RootStackNavigatorParamList>
>;
