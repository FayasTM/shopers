'use client';

import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import Load from '@/components/Load'


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Load />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default Layout