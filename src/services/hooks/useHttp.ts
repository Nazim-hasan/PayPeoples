import {useMemo} from 'react';
import axios from 'axios';
import {Platform} from 'react-native';
import {BASE_API_URL} from 'services/api';

const DEFAULT_PARAM = {
  auth: true,
};

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Platform-OS': Platform.OS,
};

export const useHttp = (param = DEFAULT_PARAM) => {
  return useMemo(() => {
    const headers = DEFAULT_HEADERS;
    const http = axios.create({
      baseURL: BASE_API_URL,
      headers,
    });

    http.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    http.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error);
        const errorStatus = error?.response?.status;
        if (!errorStatus) {
          // API response will always have status! So if there is no status code that usually means that there is a problem in the network!
          // So we are not going to handle unknown error here! There is a global network event listener in app level. Network issue is identified there.
          // Without status, error should be ignored!
          return;
        }
        if (errorStatus === 401) {
        } else if (errorStatus === 403) {
          // 403 means user is facing permission issue. Maybe his/her package/trial got expired. Refetching user data will adjust the app state
          // refreshAuthUser(token);
        } else {
        }
        return Promise.reject(error);
      },
    );
    return {http};
  }, [param.auth]);
};
