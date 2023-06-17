import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Touchable from '../../components/Touchable/Touchable';
import colors from '../../styles/colors';
import {TAB_BAR_HEIGHT_SIZE, width} from '../../styles/dimensions';
import TabBarButton from './TabBarButton';
import TabShape from './TabShape';
// import {pushIcon} from './utils';

export default function TabBar(props) {
  const {state, descriptors, navigation} = props.props;
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const {bottom} = useSafeAreaInsets();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.content}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <Touchable
                isOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.button}>
                {options.tabBarButton ? (
                  <TabBarButton />
                ) : (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingBottom: bottom - 10,
                    }}>
                    {/* {pushIcon(label, 24, isFocused)} */}
                    <Text
                      style={isFocused ? styles.label : styles.inactiveLabel}>
                      {label}
                    </Text>
                  </View>
                )}
              </Touchable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 5,
    height: TAB_BAR_HEIGHT_SIZE,
    justifyContent: 'center',
    bottom: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: colors.primary,
  },
  inactiveLabel: {
    fontSize: 12,
    color: colors.gray,
  },
});
