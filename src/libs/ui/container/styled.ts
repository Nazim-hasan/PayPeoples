import {StyleSheet} from 'react-native';
import {colors} from '../colors';
import styled from 'styled-components/native';

export const ContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flex: 1,
  },
});

export const MainFrame = styled.View`
  padding-horizontal: 17px;
`;