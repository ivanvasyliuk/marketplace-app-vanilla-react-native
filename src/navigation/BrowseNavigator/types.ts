import {NavigatorScreenParams} from '@react-navigation/native';
import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';
import {PostStackNavigatorParamList} from '../PostNavigator/types';
import screens from '../screens';

export type BrowseStackNavigatorParamList = {
  [screens.Browse]: {
    search?: string;
    filtersSubmit?: (values: filtersValuesProps) => void;
    filtersValues?: filtersValuesProps;
  };
  [screens.PostDetailsNavigator]: NavigatorScreenParams<PostStackNavigatorParamList>;
};
