import {Text, View} from 'react-native';
import {useStore} from '../../stores/createStore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import s from './styles';

const BrowseScreen = () => {
  const store = useStore();
  console.log('store', store);

  return (
    <View style={s.container}>
      <Text>
        <AntDesign name="windows" style={{color: 'green', fontSize: 60}} />
        <AntDesign name="search1" size={60} color="red" />
      </Text>
    </View>
  );
};
export default BrowseScreen;
