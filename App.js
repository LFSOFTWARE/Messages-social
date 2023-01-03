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
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStateProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Contacts}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Chat}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </AppStateProvider>
    </NavigationContainer>
  );
};

export default App;
