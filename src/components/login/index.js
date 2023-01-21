import React, {useContext, useState} from 'react';
import {Text} from 'react-native';
import {Container} from '../global/style';
import {LoginPost} from '../http/request';
import {io} from 'socket.io-client';

import {
  ButonLogin,
  ContainerImage,
  ContainerLogin,
  ErrorMessage,
  InputTextField,
} from './styles';
import {AppStateContext} from '../../context';

export const Login = ({navigation}) => {
  const [errosMessage, setErrorMessage] = useState('Email ou Senha incorretos');
  const [email, setEmail] = useState(null);
  const [password, setPassWord] = useState(null);
  const {setUser} = useContext(AppStateContext);
  const socket = io('http://192.168.0.228:3000');

  const handleLogin = async () => {
    if (email !== null && password !== null) {
      const {user, isAuth} = await LoginPost(email, password);
      if (isAuth !== null && isAuth !== false) {
        socket.emit('login', {user});
        setUser(user);
        navigation.navigate('Contacts');
      }
    }
  };

  socket.connect();
  return (
    <Container>
      <ContainerImage
        sorce={{uri: 'https://reactjs.org/logo-og.png'}}
        resizeMode="cover">
        <Text>Login</Text>
      </ContainerImage>
      <ContainerLogin>
        <Text>Login2</Text>
        <InputTextField
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <InputTextField
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassWord(text)}
        />
        <ErrorMessage>{errosMessage}</ErrorMessage>
        <ButonLogin onPress={() => handleLogin()} />
      </ContainerLogin>
    </Container>
  );
};
