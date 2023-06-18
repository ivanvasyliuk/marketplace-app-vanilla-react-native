import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';

export function pushIcon(name: string, size: number, focuced: boolean) {
  switch (name) {
    case 'Browse':
      return (
        <AntDesign
          name="search1"
          size={size}
          color={focuced ? colors.primary : colors.gray}
        />
      );
      break;
    case 'Saved':
      return (
        <Ionicons
          name="md-bookmark-outline"
          size={size}
          color={focuced ? colors.primary : colors.gray}
        />
      );
      break;
    case 'Inbox':
      return (
        <AntDesign
          name="inbox"
          size={size}
          color={focuced ? colors.primary : colors.gray}
        />
      );
      break;
    case 'Profile':
      return (
        <AntDesign
          name="user"
          size={size}
          color={focuced ? colors.primary : colors.gray}
        />
      );
      break;
  }
}
