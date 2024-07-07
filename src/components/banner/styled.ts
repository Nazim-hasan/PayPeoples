import {colors} from 'libs/ui';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const BannerContainer = styled.View`
  background-color: ${colors.primary};
  padding-horizontal: 17px;
  flex-direction: row;
  padding-vertical: 16px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const IconContainer = styled.View`
  margin-right: 10px;
  margin-top: 5px;
`;

export const InfoContainer = styled.View``;

export const BannerStyles = StyleSheet.create({
  text: {
    lineHeight: 24,
  },
});
