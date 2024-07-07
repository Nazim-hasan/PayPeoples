import React from 'react';
import {ButtonWrapper} from './styled';
import Text from '../text/text';
import {IButtonProps} from './types';

export const Button = ({title = '', onPress}: IButtonProps) => {
  return (
    <ButtonWrapper onPress={onPress}>
      <Text preset='smBold' centered>{title}</Text>
    </ButtonWrapper>
  );
};
