import {useQuery} from 'react-query';
import {AxiosInstance, AxiosError} from 'axios';

import {useHttp} from './useHttp';
import {IPackage, IPackageResponse} from 'libs/types';
import {QueryPropType} from 'libs/types/interfaces/react-query.interface';
import {PACKAGE_LIST} from 'services/api';

const getPackages = async (http: AxiosInstance) => {
  const res = await http.get<IPackage[]>(PACKAGE_LIST);
  return res?.data as IPackage[];
};

export const usePackages = (queryProps?: QueryPropType) => {
  const {http} = useHttp();
  const {config = {}, keys = []} = queryProps || {};
  return useQuery<IPackage[], AxiosError>(
    ['packages', ...keys],
    () => getPackages(http),
    {
      refetchOnWindowFocus: false,
      ...config,
    },
  );
};
