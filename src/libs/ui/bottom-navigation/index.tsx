import React from 'react';
import PersonIcon from '../../../../assets/svg/person';
import HomeIcon from '../../../../assets/svg/home';
import WalletIcon from '../../../../assets/svg/wallet';
import GearIcon from '../../../../assets/svg/gear';
import {BottomBarWrapper} from './styled';
import {IBottomTabBarProps} from './types';

const BottomBar = ({bottomTabBar}: IBottomTabBarProps) => {
  return (
    <BottomBarWrapper>
      <PersonIcon />
      <HomeIcon />
      <WalletIcon />
      <GearIcon />
    </BottomBarWrapper>
  );
};

export default BottomBar;
