import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

import {IContainerProps} from './types';
import {ContainerStyles, MainFrame} from './styled';
import {colors} from '../colors';

export const Screen = ({children, customStyles}: IContainerProps) => {
  return (
    <SafeAreaView style={[ContainerStyles.container, customStyles]}>
      <MainFrame>
        <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
        {children}
      </MainFrame>
    </SafeAreaView>
  );
};
