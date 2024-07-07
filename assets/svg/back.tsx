import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const BackIcon = (props: SvgProps) => (
  <Svg width={9} height={15} viewBox="0 0 9 15" fill="none" {...props}>
    <Path
      d="M0.531257 8.6029L6.61188 14.6835C6.97751 15.0492 7.57188 15.0492 7.93751 14.6835C8.30313 14.3179 8.30313 13.7235 7.93751 13.3579L2.51688 7.93728L7.93751 2.51665C8.30313 2.15103 8.30313 1.55665 7.93751 1.19103C7.57188 0.825403 6.97751 0.825403 6.61188 1.19103L0.531257 7.27165C0.347507 7.4554 0.257507 7.6954 0.257507 7.93728C0.257507 8.17915 0.347507 8.41915 0.531257 8.6029Z"
      fill="white"
    />
  </Svg>
);
export default BackIcon;
