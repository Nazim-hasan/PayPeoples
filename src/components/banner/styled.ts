import {colors} from 'libs/ui';
import { wp } from 'libs/ui/responsive-design/shared--responsive-dimenssion';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const BannerContainer = styled.View`
  background-color: ${colors.primary};
  padding-horizontal: 17px;
  flex-direction: row;
  padding-vertical: 16px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const IconContainer = styled.View`
  margin-right: ${wp(3)}px;
  margin-top: 5px;
`;

export const InfoContainer = styled.View``;

export const BannerStyles = StyleSheet.create({
  text: {
    lineHeight: 24,
  },
});
