import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, Mask, Path } from "react-native-svg";
import colors from "../../styles/colors";

const EmptyInboxSvg = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 180,
        right: 0,
        left: 0,
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Mask id="path-1-inside-1_18_428" fill="white">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 76.5538 3.61448 88.2634 9.85954 98.1449L2.51652 125.549L29.9481 118.199C39.8101 124.408 51.4856 128 64 128Z"
          />
        </Mask>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 76.5538 3.61448 88.2634 9.85954 98.1449L2.51652 125.549L29.9481 118.199C39.8101 124.408 51.4856 128 64 128Z"
          fill="white"
        />
        <Path
          d="M9.85954 98.1449L11.7914 98.6625L12.018 97.8166L11.5502 97.0764L9.85954 98.1449ZM2.51652 125.549L0.584665 125.032L-0.311911 128.378L3.03415 127.481L2.51652 125.549ZM29.9481 118.199L31.0137 116.507L30.2744 116.041L29.4305 116.267L29.9481 118.199ZM126 64C126 98.2417 98.2417 126 64 126V130C100.451 130 130 100.451 130 64H126ZM64 2C98.2417 2 126 29.7583 126 64H130C130 27.5492 100.451 -2 64 -2V2ZM2 64C2 29.7583 29.7583 2 64 2V-2C27.5492 -2 -2 27.5492 -2 64H2ZM11.5502 97.0764C5.50126 87.5052 2 76.1646 2 64H-2C-2 76.9431 1.72771 89.0216 8.16888 99.2134L11.5502 97.0764ZM4.44837 126.067L11.7914 98.6625L7.92769 97.6272L0.584665 125.032L4.44837 126.067ZM29.4305 116.267L1.99888 123.618L3.03415 127.481L30.4658 120.131L29.4305 116.267ZM64 126C51.8736 126 40.5659 122.521 31.0137 116.507L28.8826 119.892C39.0542 126.296 51.0976 130 64 130V126Z"
          fill="#A0A4B1"
          mask="url(#path-1-inside-1_18_428)"
        />
        <Circle cx="50" cy="48" r="1.5" fill="#C4C4C4" stroke="#A0A4B1" />
        <Circle cx="78" cy="48" r="1.5" fill="#C4C4C4" stroke="#A0A4B1" />
        <Path
          d="M80 82C80 73.1634 72.8366 66 64 66C55.1634 66 48 73.1634 48 82"
          stroke="#A0A4B1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text
        style={{
          color: colors.border,
          weight: "400",
          lineHeight: 24,
          align: "center",
          fontSize: 16,
        }}
      >
        No massages yet
      </Text>
    </View>
  );
};
export default EmptyInboxSvg;
