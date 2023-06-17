import React from "react";
import Svg, { Circle, Mask, Rect } from "react-native-svg";
import { TAB_BAR_HEIGHT_SIZE, width } from "../../styles/dimensions";

export default function TabShape() {
  return (
    <Svg width={width} height={TAB_BAR_HEIGHT_SIZE}>
      <Mask id="myMask">
        <Rect
          x="0"
          y="0"
          width={width}
          height={TAB_BAR_HEIGHT_SIZE}
          fill="white"
        />
        <Circle cx={width / 2} cy="0" r="43" fill="black" />
      </Mask>
      <Rect
        x="0"
        y="0"
        width={width}
        height={TAB_BAR_HEIGHT_SIZE}
        mask="url(#myMask)"
        fill="white"
      />
    </Svg>
  );
}
