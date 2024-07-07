import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {QueryClientProvider} from 'react-query';
import {queryClient} from 'libs/queryClient';
import {BottomTab} from 'navigation';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
