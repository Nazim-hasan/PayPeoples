import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from "react-native";
import { colors } from "libs/ui";

export const PackageContainer = styled(LinearGradient)`
  width: 50%;
  marginRight: 9px;
  padding-horizontal: 18px;
  padding-vertical: 27px;
  padding-horizontal: 18px;
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  
`;

export const PackageCardStyles = StyleSheet.create({
  name: {
    color: colors.lightGray
  }
})