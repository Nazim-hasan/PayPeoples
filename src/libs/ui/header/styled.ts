import styled from "styled-components/native";
import { colors } from "../colors";

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.View`

  background-color: ${colors.dark};
  padding-horizontal: 15px;
  padding-bottom: 10px;
`;