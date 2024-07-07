import styled from "styled-components/native";
import { colors } from "../colors";
import Text from "../text/text";
import { StyleSheet } from "react-native";


export const Container = styled.View`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled(Text)`
  color: ${colors.light};
`;

export const EmptyStyles = StyleSheet.create({
  lottieStyle: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
})