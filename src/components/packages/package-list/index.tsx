import {FlatList} from 'react-native';
import React from 'react';
import {packages} from './data';
import {Package} from '../package-card';
import {ListStyles} from './styled';

export const Packages = () => {
  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={ListStyles.columnWrapper}
      data={packages}
      renderItem={item => <Package packageInfo={item} />}
    />
  );
};
