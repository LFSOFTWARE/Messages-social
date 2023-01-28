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
import {Login} from './src/components/login';
import {SocketProvider} from './src/context/socket';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStateProvider>
        <SocketProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Contacts"
              component={Contacts}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SocketProvider>
      </AppStateProvider>
    </NavigationContainer>
  );
};

export default App;
