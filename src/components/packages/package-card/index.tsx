import {View} from 'react-native';
import React from 'react';
import Text from 'libs/ui/text/text';
import {InfoContainer, PackageContainer} from './styled';
import {Button} from 'libs/ui/button';
import PackageInfo from '../package-info';
import {IPackageCardProps} from './types';

export const Package = ({packageInfo}: IPackageCardProps) => {
  const {item} = packageInfo;
  return (
    <PackageContainer>
      <Text centered>{item?.Name}</Text>
      <Text centered>{item?.Price}</Text>
      <Button />
      <InfoContainer>
        <PackageInfo label={'Profit'} value={item?.MonthlyReturn} />
        <PackageInfo label={'Maturity'} value={`${item?.Duration} Year`} />
        <PackageInfo label={'Bonus'} value={`${item?.Bonus} Tokens`} />
        <PackageInfo
          label={'Maturity bonus'}
          value={`${item?.MaturityBonus}% after maturity`}
        />
      </InfoContainer>
    </PackageContainer>
  );
};
