import React from 'react';
import {Screen} from 'libs/ui';
import Text from 'libs/ui/text/text';
import {Banner, Packages} from 'components';

export const HomeScreen = () => {
  return (
    <Screen>
      <Text preset="heading">Get FDR Package </Text>
      <Banner />
      <Packages />
    </Screen>
  );
};
