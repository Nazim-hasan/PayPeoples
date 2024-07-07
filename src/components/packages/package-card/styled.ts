import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from "react-native";
import { colors } from "libs/ui";

export const PackageContainer = styled(LinearGradient)`
  width: 48%;
  marginRight: 9px;
  marginBottom: 9px;
  padding-horizontal: 18px;
  padding-vertical: 27px;
  padding-horizontal: 18px;
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  
`;

export const PackageCardStyles = StyleSheet.create({
  name: {
    color: colors.lightGray,
    marginTop: 5,
  },
  recommended: {
    position: 'absolute',
    backgroundColor: '#0078BE',
    width: '130%',
    paddingVertical: 4,
    marginBottom: 10,
  }
})