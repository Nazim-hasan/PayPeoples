import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const BlurStyles = StyleSheet.create({
  blue: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  comingSoon: {
    marginTop: 10,
  }
})

export const BlurContentContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;  
  justify-content: center;
  align-items: center;

`;