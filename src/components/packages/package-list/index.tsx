import React from 'react';
import {FlatList} from 'react-native';

import {packages} from './data';
import {Package} from '../package-card';
import {ListStyles} from './styled';
import {IPackageItem} from './types';

export const Packages = () => {
  const renderItem = ({item}: IPackageItem) => {
    return <Package packageInfo={item} />;
  };
  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={ListStyles.columnWrapper}
      data={packages}
      renderItem={renderItem}
    />
  );
};
