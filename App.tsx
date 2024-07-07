import React from 'react'
import { HomeScreen } from './src/screens'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'libs/queryClient'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  )
}

export default App