import {SafeAreaView} from 'react-native';
import React from 'react';

import {IContainerProps} from './types';
import {ContainerStyles} from './styled';

export const Screen = ({children, customStyles}: IContainerProps) => {
  return (
    <SafeAreaView style={[ContainerStyles.container, customStyles]}>
      {children}
    </SafeAreaView>
  );
};

