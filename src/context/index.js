import React, {useState} from 'react';

export const AppStateContext = React.createContext();

export const AppStateProvider = props => {
  const [messages, setMessages] = useState([
    {message: 'Oi, Tudo bem?', type: 'recive', date: new Date()},
    {
      message: 'Passa mais tarde aqui na minha loja.',
      type: 'recive',
      date: new Date(),
    },
  ]);
  const [user, setUser] = useState(null);
  const contextValue = {messages, setMessages, user, setUser};

  return (
    <AppStateContext.Provider value={contextValue}>
      {props.children}
    </AppStateContext.Provider>
  );
};
