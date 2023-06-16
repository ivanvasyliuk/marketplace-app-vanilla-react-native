import React from "react";
import Svg, { Path } from "react-native-svg";

const MessageIcon = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.4 0H1.6C0.72 0 0.00799999 0.72 0.00799999 1.6L0 16L3.2 12.8H14.4C15.28 12.8 16 12.08 16 11.2V1.6C16 0.72 15.28 0 14.4 0ZM12 9.6H4C3.56 9.6 3.2 9.24 3.2 8.8C3.2 8.36 3.56 8 4 8H12C12.44 8 12.8 8.36 12.8 8.8C12.8 9.24 12.44 9.6 12 9.6ZM12 7.2H4C3.56 7.2 3.2 6.84 3.2 6.4C3.2 5.96 3.56 5.6 4 5.6H12C12.44 5.6 12.8 5.96 12.8 6.4C12.8 6.84 12.44 7.2 12 7.2ZM12 4.8H4C3.56 4.8 3.2 4.44 3.2 4C3.2 3.56 3.56 3.2 4 3.2H12C12.44 3.2 12.8 3.56 12.8 4C12.8 4.44 12.44 4.8 12 4.8Z"
        fill="white"
      />
    </Svg>
  );
};
export default MessageIcon;
