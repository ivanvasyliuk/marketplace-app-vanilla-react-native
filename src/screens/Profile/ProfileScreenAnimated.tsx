import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useStore} from '../../stores/createStore';
import {width} from '../../styles/dimensions';
import Touchable from '../../components/Touchable/Touchable';
import screens from '../../navigation/screens';
import SettingsIcon from '../../components/svg/SettingsIcon';
import ProductList from '../../components/ProductList/ProductList';
import NotSellYetIcon from '../../components/svg/NotSellYetIcon';
import s from './styles';

const ProfileScreenAnimated = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const headerHeight = useSharedValue(172);
  const scrollOffset = useSharedValue(0);
  const textWidth = useSharedValue(0);
  const store = useStore();

  const {top} = useSafeAreaInsets();

  const owner = !!route.params?.owner
    ? route.params?.owner.owner
    : store.viewer.userModel;

  const isOwnerPost = store.viewer.userId === owner.id;

  useEffect(() => {
    if (!owner) {
      navigation.navigate(screens.Settings);
    }
    store.products.ownStore.fetch.run(owner.id);
  }, [store.products.ownStore.list]);

  const list = store.products.ownStore.ownProductsArray.asArray;

  const HEADER_MAX_HEIGHT = 172;
  const HEADER_MIN_HEIGHT = 56;
  const PROFILE_IMAGE_MAX_HEIGHT = 72;
  const PROFILE_IMAGE_MIN_HEIGHT = 36;
  const headerChangeRange = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  function scrollHandler(e) {
    scrollOffset.value = e.nativeEvent.contentOffset.y;
    headerHeight.value = interpolate(
      e.nativeEvent.contentOffset.y,
      [0, headerChangeRange],
      [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    );
  }

  const headerContainer = useAnimatedStyle(() => {
    return {
      // marginTop: top,
      minHeight: HEADER_MIN_HEIGHT,
      height: withSpring(headerHeight.value, {
        damping: 10,
        stiffness: 100,
      }),
    };
  });

  const backButtonContainer = useAnimatedStyle(() => {
    const top = (HEADER_MIN_HEIGHT - 36) / 2;
    const opacity = interpolate(
      scrollOffset.value,
      [0, headerChangeRange - 10, headerChangeRange],
      [0, 0, 1],
    );
    return {
      opacity: opacity,
      position: 'absolute',
      top: top,
      left: 10,
      width: 36,
      height: 36,
    };
  });

  const textContainer = useAnimatedStyle(() => {
    const middle = (width - textWidth.value) / 2;
    let left = 92;
    let top = (HEADER_MIN_HEIGHT - 17) / 2;
    if (scrollOffset.value < 120) {
      left = interpolate(
        scrollOffset.value,
        [0, headerChangeRange],
        [middle, 92],
      );
      top = interpolate(scrollOffset.value, [0, headerChangeRange], [99, 17]);
    }
    return {
      transform: [{translateX: withSpring(left)}],
      position: 'absolute',
      top: withSpring(top),
    };
  });

  const avatarContainer = useAnimatedStyle(() => {
    const middle = width / 2 - PROFILE_IMAGE_MAX_HEIGHT / 2;
    let left = 48;
    let imageSize = PROFILE_IMAGE_MIN_HEIGHT;
    let top = 11;
    if (scrollOffset.value < 120) {
      left = interpolate(
        scrollOffset.value,
        [0, headerChangeRange],
        [middle, 48],
      );
      imageSize = interpolate(
        scrollOffset.value,
        [0, headerChangeRange],
        [72, 36],
      );
      top = interpolate(scrollOffset.value, [0, headerChangeRange], [19, 11]);
    }
    return {
      transform: [{translateX: withSpring(left)}],
      backgroundColor: 'red',
      top: withSpring(top),
      width: withSpring(imageSize),
      height: withSpring(imageSize),
      borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
      overflow: 'hidden',
      position: 'absolute',
    };
  });

  return (
    <View style={[s.container, {paddingTop: top}]}>
      <Animated.View style={headerContainer}>
        <Animated.View style={avatarContainer}></Animated.View>

        <Animated.View style={textContainer}>
          <Text
            style={s.boldText}
            onLayout={e => {
              textWidth.value = e.nativeEvent.layout.width;
            }}>
            {owner?.fullName}
          </Text>
        </Animated.View>
        {isOwnerPost && (
          <Touchable
            style={s.settingsButton}
            isOpacity
            onPress={() => navigation.navigate(screens.Settings)}>
            <SettingsIcon />
          </Touchable>
        )}

        <Animated.View style={backButtonContainer}>
          <Touchable
            style={s.centerContainer}
            isOpacity
            onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={22} />
          </Touchable>
        </Animated.View>
      </Animated.View>
      <ProductList
        list={list}
        onScroll={scrollHandler}
        ListEmptyComponent={<NotSellYetIcon />}
      />
    </View>
  );
};

export default observer(ProfileScreenAnimated);
