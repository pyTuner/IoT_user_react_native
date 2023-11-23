import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import RootNavigation from './src/navigation'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './src/store/store';
import EStyleSheet from 'react-native-extended-stylesheet'

export const reduxPersistStore = persistStore(reduxStore);

export default App = () => {

  useEffect(() => {
    EStyleSheet.build();
  }, []);

  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  )
}

