import {filtersValuesProps} from '../../screens/Browse/BrowseScreen';
import screens from '../screens';

export type FiltersStackNavigatorParamList = {
  [screens.FiltersScreen]: {
    filtersValues: filtersValuesProps;
    filtersSubmit: (filtersValues: filtersValuesProps) => void;
  };
};
