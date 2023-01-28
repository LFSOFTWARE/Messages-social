import React, {useContext, useState} from 'react';
import {Text} from 'react-native';
import {Container} from '../global/style';
import {LoginPost} from '../http/request';

import {
  ButonLogin,
  ContainerImage,
  ContainerLogin,
  ErrorMessage,
  InputTextField,
} from './styles';
import {AppStateContext} from '../../context';
import {SocketStateContext, WerbSockertContext} from '../../context/socket';

export const Login = ({navigation}) => {
  const [errosMessage, setErrorMessage] = useState('Email ou Senha incorretos');
  const [email, setEmail] = useState('luiz@gmail.com');
  const [password, setPassWord] = useState('123');

  const {setUser} = useContext(AppStateContext);

  const {socket} = useContext(WerbSockertContext);

  const handleLogin = async () => {
    console.log('efetuou');

    if (email !== null && password !== null) {
      const {user, isAuth} = await LoginPost(email, password);

      if (isAuth !== null && isAuth !== false) {
        socket.emit('login', {user: user});
        setUser(user);
        navigation.navigate('Contacts');
      }
    }
  };

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
