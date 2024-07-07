import { View, Pressable } from 'react-native'
import React from 'react'
import { ButtonWrapper } from './styled'
import Text from '../text/text'

export const Button = () => {
  return (
    <ButtonWrapper>
      <Text centered>Button</Text>
    </ButtonWrapper>
  )
}
