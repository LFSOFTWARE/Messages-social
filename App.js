/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Chat} from './src/components/chat';
import {Contacts} from './src/components/contacts';
import {AppStateProvider} from './src/context';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppStateProvider>
        <Contacts />
      </AppStateProvider>
    </NavigationContainer>
  );
};

export default App;
