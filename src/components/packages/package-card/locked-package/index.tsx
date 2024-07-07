import {View} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import Text from 'libs/ui/text/text';
import {PadLockIcon} from '../../../../../assets/svg';
import {BlurContentContainer, BlurStyles} from './styled';

export const LockedPackage = () => {
  return (
    <>
      <BlurView
        style={BlurStyles.blue}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <BlurContentContainer>
        <PadLockIcon />
        <Text preset="xlRegular" centered customStyles={BlurStyles.comingSoon}>
          Coming Soon
        </Text>
      </BlurContentContainer>
    </>
  );
};
