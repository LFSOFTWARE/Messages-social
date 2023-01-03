/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Chat} from './src/components/chat';
import {AppStateProvider} from './src/context';

const App = () => {
  return (
    <AppStateProvider>
      <Chat />
    </AppStateProvider>
  );
};

export default App;
