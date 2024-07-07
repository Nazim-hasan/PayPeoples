import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../colors'
import BackIcon from '../../../../assets/svg/back'
import BellIcon from '../../../../assets/svg/bell'
import { Container, Wrapper } from './styled'

const Header = () => {
  return (
    <Container>
      <Wrapper>
      <BackIcon />
      <BellIcon />
    </Wrapper>
    </Container>
  )
}

export default Header