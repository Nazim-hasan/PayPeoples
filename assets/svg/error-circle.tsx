import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect, SvgProps} from 'react-native-svg';
export const ErrorCircleIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <G clipPath="url(#clip0_1_104)">
      <Path
        d="M10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20ZM11.25 11.25C11.25 11.94 10.69 12.5 10 12.5C9.31 12.5 8.75 11.94 8.75 11.25V5C8.75 4.31 9.31 3.75 10 3.75C10.69 3.75 11.25 4.31 11.25 5V11.25ZM10 13.73C10.69 13.73 11.25 14.29 11.25 14.98C11.25 15.67 10.69 16.23 10 16.23C9.31 16.23 8.75 15.67 8.75 14.98C8.75 14.29 9.31 13.73 10 13.73Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_104">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
