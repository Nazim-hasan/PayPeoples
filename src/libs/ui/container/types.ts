import {StyleProp, ViewStyle} from 'react-native';

export interface IContainerProps {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}
