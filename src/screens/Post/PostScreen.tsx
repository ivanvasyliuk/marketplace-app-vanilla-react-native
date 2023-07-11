import React, {useState} from 'react';
import {
  View,
  Share,
  Text,
  ScrollView,
  Linking,
  StatusBar,
  Alert,
} from 'react-native';
import {observer} from 'mobx-react';
import {RouteProp, useRoute} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Touchable from '../../components/Touchable/Touchable';
import {useStore} from '../../stores/createStore';
import CallAndMessageButtons from '../../components/CallAndMessageButtons/CallAndMessageButtons';
import {TAB_BAR_HEIGHT_SIZE} from '../../styles/dimensions';
import DotsCarousel from '../../components/DotsCarousel/DotsCarousel';
import SellerInfo from '../../components/SellerInfo/SellerInfo';
import ImagesCarousel from '../../components/ImagesCarousel/ImagesCarousel';
import HeaderPost from '../../components/HeaderPost/HeaderPost';
import {PostStackNavigatorParamList} from '../../navigation/PostNavigator/types';
import colors from '../../styles/colors';
import s from './styles';

const PostScreen = () => {
  const [allDescriptionVisible, setAllDescriptionVisible] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const route =
    useRoute<RouteProp<PostStackNavigatorParamList, 'PostDetails'>>();
  const store = useStore();

  const product = route.params.product;

  const isOwnerPost = store.viewer.userId === product.ownerId;

  const timeCreatedAt = `${new Date(+product.createdAt).getHours()}:${new Date(
    +product.createdAt,
  ).getMinutes()}`;

  async function onShare() {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  function openCall(phoneNumber: string) {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      Toast.show({
        type: 'success',
        text1: "User don't have phone number ",
      });
    }
  }

  return (
    <View style={s.container}>
      {/* <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle={
          route.name == screens.PostDetails ? 'light-content' : 'default'
        }
      /> */}
      <HeaderPost
        product={product}
        isOwnerPost={isOwnerPost}
        onShare={onShare}
      />
      <ScrollView style={s.contentContainer}>
        <View>
          <ImagesCarousel list={product.photos} setIndex={setIndex} />
          <DotsCarousel list={product.photos} index={index} />
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0,0.6)']}
            style={s.titleAndPriceContainer}>
            <View>
              <Text style={s.title}>{product.title}</Text>
              <View style={s.timeAndLocation}>
                <Text style={s.locationLabel}>{timeCreatedAt}</Text>
                <Text style={s.locationLabel}>
                  <Ionicons
                    name="location-sharp"
                    size={18}
                    color={colors.gray}
                  />
                  {product.location}
                </Text>
              </View>
            </View>
            <Text style={s.price}>{`$${product.price}`}</Text>
          </LinearGradient>
        </View>
        <View style={s.descriptionContainer}>
          <View>
            <Text style={s.descrioption}>
              {allDescriptionVisible
                ? product.description
                : product.description?.slice(0, 145)}
            </Text>
            <Touchable
              isOpacity
              onPress={() => setAllDescriptionVisible(!allDescriptionVisible)}>
              {product.description.length > 145 && (
                <Text style={s.readMore}>
                  {allDescriptionVisible ? 'Hide more...' : 'Read more...'}
                </Text>
              )}
            </Touchable>
          </View>
          <View style={s.horizontalLine} />
          <SellerInfo owner={product.owner} />
        </View>
      </ScrollView>
      <Toast position="bottom" bottomOffset={TAB_BAR_HEIGHT_SIZE * 2} />
      {!isOwnerPost && (
        <CallAndMessageButtons product={product} openCall={openCall} />
      )}
    </View>
  );
};
export default observer(PostScreen);
