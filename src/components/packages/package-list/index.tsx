import React from 'react';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';

import {usePackages} from 'services/hooks/usePackages';
import {colors} from 'libs/ui';

import {IPackageItem} from './types';
import {IPackage} from 'libs/types';
import Package from '../package-card';
import Text from 'libs/ui/text/text';

export const Packages = () => {
  const {data, isLoading, isFetching, refetch} = usePackages({
    keys: [String('')],
    config: {
      keepPreviousData: true,
    },
  });
  const isLoadingResponse = !data && (isLoading || isFetching);

  const renderItem = ({item}: IPackageItem) => {
    return <Package packageInfo={item} />;
  };
  const keyExtractor = (item: IPackage) => item.ID.toString();

  const refreshController = (
    <RefreshControl
      tintColor={colors.light}
      refreshing={isFetching || isLoading}
      onRefresh={refetch}
    />
  );
  const ListEmptyComponent = () => {
    return <Text>No packages available</Text>;
  }

  return isLoadingResponse ? (
    <ActivityIndicator color={colors.light} size={'large'} />
  ) : (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={refreshController}
      ListEmptyComponent={ListEmptyComponent}
      showsVerticalScrollIndicator={false}
      maxToRenderPerBatch={8}
      updateCellsBatchingPeriod={30}
      initialNumToRender={6}
      removeClippedSubviews={true}
    />
  );
};
