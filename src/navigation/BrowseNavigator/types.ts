import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';
import screens from '../screens';

export type BrowseStackNavigatorParamList = {
  [screens.Browse]: {
    search?: string;
    filtersSubmit?: (values: filtersValuesProps) => void;
    filtersValues?: filtersValuesProps;
  };
  [screens.PostDetailsNavigator]: undefined;
  [screens.Filters]: undefined;
};
