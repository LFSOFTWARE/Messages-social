import React, {useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Container, PerfilPictureCircle} from '../global/style';
import {
  Box,
  ContainerChat,
  ContainerMessageRecive,
  ContainerMessageSend,
  TextMessage,
  BoxHeader,
  TextName,
  TextNick,
} from './style';

export const Chat = () => {
  let refList = useRef(null);

  const [messages, setMessages] = useState([
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'recive'},
    {message: 'Ola, Tudo?', type: 'send'},
    {
      message: 'Ola, Tudo? vamos nos ver hoje xxxxxxxxxxxxxxxxxxxx',
      type: 'recive',
    },
  ]);

  return (
    <Container>
      <Box>
        <BoxHeader>
          <PerfilPictureCircle source={require('../../public/perfil.jpg')} />
          <View>
            <TextName>Luiz Fernando</TextName>
            <TextNick>@F2Luiz</TextNick>
          </View>
        </BoxHeader>
      </Box>
      <ContainerChat>
        <ScrollView
          ref={ref => (refList = ref)}
          onContentSizeChange={() => refList.scrollToEnd({animated: true})}>
          {messages.map(item => {
            if (item?.type === 'recive') {
              return (
                <ContainerMessageSend key={Math.random()}>
                  <TextMessage color="white">{item?.message}</TextMessage>
                </ContainerMessageSend>
              );
            }
            return (
              <ContainerMessageRecive key={Math.random()}>
                <TextMessage color="black">{item?.message}</TextMessage>
              </ContainerMessageRecive>
            );
          })}
        </ScrollView>
      </ContainerChat>
      <Box>
        <Text>Luiz</Text>
      </Box>
    </Container>
  );
};
