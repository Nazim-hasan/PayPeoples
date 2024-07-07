import React from 'react';
import {Wrapper} from './styled';
import Text from 'libs/ui/text/text';
import {IPageInfoProps} from './types';

const PackageInfo = ({label, value}: IPageInfoProps) => {
  return (
    <Wrapper>
      <Text preset="smBold">
        {label}:<Text preset="smRegular"> {value}</Text>
      </Text>
    </Wrapper>
  );
};

export default PackageInfo;
