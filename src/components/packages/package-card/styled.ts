import styled from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from "react-native";
import { colors } from "libs/ui";

export const PackageContainer = styled(LinearGradient)`
  width: 48%;
  marginRight: 9px;
  marginBottom: 15px;
  padding-vertical: 27px;
  border-radius: 10px;
`;

export const Wrapper = styled.View`
  padding-horizontal: 18px;
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
    backgroundColor: colors.primary,
    width: '100%',
    paddingVertical: 4,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  }
})