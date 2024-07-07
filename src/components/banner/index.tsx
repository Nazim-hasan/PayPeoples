import Text from 'libs/ui/text/text';
import React from 'react';
import {
  BannerContainer,
  BannerStyles,
  IconContainer,
  InfoContainer,
} from './styled';
import {ErrorCircleIcon} from 'assets/svg';

export const Banner = () => {
  return (
    <BannerContainer>
      <IconContainer>
        <ErrorCircleIcon />
      </IconContainer>
      <InfoContainer>
        <Text customStyles={BannerStyles.text}>
          You are using{' '}
          <Text preset="mdBold">free version only for 30days</Text>. Get package
          and build community.
        </Text>
      </InfoContainer>
    </BannerContainer>
  );
};
