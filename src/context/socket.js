import React, {createContext, useState} from 'react';
import {io, Socket} from 'socket.io-client';

export const WerbSockertContext = React.createContext();

export const SocketProvider = props => {
  const socket = io('http://192.168.0.228:3000');
  return (
    <WerbSockertContext.Provider value={{socket}}>
      {props.children}
    </WerbSockertContext.Provider>
  );
};
