import React from 'react';
import LottieView from 'lottie-react-native';
import {IEmptyListProps} from './types';
import {Container, EmptyStyles, Message} from './styled';
import {animatedIcons} from '../animated-icons';

export const EmptyList = ({emptyNote}: IEmptyListProps) => {
  return (
    <Container>
      <LottieView
        style={EmptyStyles.lottieStyle}
        source={animatedIcons.empty}
        autoPlay
        loop
      />
      <Message preset='lgRegular'>{emptyNote}</Message>
    </Container>
  );
};
