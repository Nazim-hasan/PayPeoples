import React, {memo} from 'react';
import Text from 'libs/ui/text/text';
import {InfoContainer, PackageCardStyles, PackageContainer} from './styled';
import {Button} from 'libs/ui/button';
import PackageInfo from '../package-info';
import {IPackageCardProps} from './types';
import {colors} from 'libs/ui';

const Package = memo(
  ({packageInfo}: IPackageCardProps) => (
    <PackageContainer
      colors={[colors.gray, colors.darkBlue]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text centered customStyles={PackageCardStyles.name}>
        {packageInfo?.Name}
      </Text>
      <Text centered preset="lgRegular">
        {packageInfo?.Price}
      </Text>
      <Button title="Select" />
      <InfoContainer>
        <PackageInfo label={'Profit'} value={packageInfo?.MonthlyReturn} />
        <PackageInfo
          label={'Maturity'}
          value={`${packageInfo?.Duration} Year`}
        />
        <PackageInfo label={'Bonus'} value={`${packageInfo?.Bonus} Tokens`} />
        <PackageInfo
          label={'Maturity bonus'}
          value={`${packageInfo?.MaturityBonus}% after maturity`}
        />
      </InfoContainer>
    </PackageContainer>
  ),
  (prevProps, nextProps) => {
    return prevProps.packageInfo === nextProps.packageInfo;
  },
);

export default Package;
